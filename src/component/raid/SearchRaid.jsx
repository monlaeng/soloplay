import axios from 'axios';
import { useEffect, useState } from 'react';
import RaidModal from './RaidModal';

function SearchRaid(props) {
    const [raidList, setRaidList] = useState([]);
    const [searchRaid, setSearchRaid] = useState("");

    const [modalOpen, setModalOpen] = useState(false);      //모달창 상태 관리
    const [selectedData, setSelectedData] = useState(null); //선택한 마커 데이터


    const onChange = (e) => {
        setSearchRaid(e.target.value);
    };

    // API 호출 후 raidList 설정
    useEffect(() => {
        axios.get('/raid/raidList')
            .then((response) => {
                setRaidList(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);  

    // 입력된 검색어를 기준으로 필터링
    const filterMonster = raidList.filter((monsterinfo) => (
        monsterinfo.merchantAddress.includes(searchRaid) ||
        monsterinfo.merchantName.includes(searchRaid)
    ));

    function selectRaid(raidId) {
        setSelectedData(raidList.find((selected) => (
            selected.raidId===raidId
        )))
        // data[index]를 선택된 데이터로 설정
        setModalOpen(true);  // 모달 오픈 
    }

    const handlePopupMessage = () => {      //모달 오픈 이벤트
        setModalOpen(true);
    };

    return (
        <div>
            <h5>-레이드목록-</h5>
            <input 
                className='search' 
                placeholder='Search🔎' 
                onChange={onChange} 
                value={searchRaid} 
            />
            <ul>
            {filterMonster.map((item, index) => (
                <li onClick={() => selectRaid(item.raidId)} className="raidList" key={item.raidId}>
                    <p>{item.merchantName}</p>
                </li>
            ))}
            </ul>


            <RaidModal
                isOpen={modalOpen}
                onRequestClose={() => setModalOpen(false)}
                selectedData={selectedData}
            />
        </div>
    );
}

export default SearchRaid;
