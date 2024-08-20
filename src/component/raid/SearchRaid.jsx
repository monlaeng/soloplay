import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import RaidModal from './RaidModal';
import Select from 'react-select';


function SearchRaid(props) {
    const [raidList, setRaidList] = useState([]);
    const [searchRaid, setSearchRaid] = useState("");
    const [selected, setSelected] = useState("");

    const [modalOpen, setModalOpen] = useState(false);      //모달창 상태 관리
    const [selectedData, setSelectedData] = useState(null); //선택한 마커 데이터
    const [selectLocation, setSelectLocation] = useState(null);
    
    const option = useMemo(() => {
        const optionData = [];
        axios.get('http://api.odcloud.kr/api/15063993/v1/uddi:e6b4e89e-5524-47ef-9db7-eedabf41ed29?page=1&perPage=26&serviceKey=a%2BypfTG%2FRyUR34XWh4gmkwq1d%2BAHRXRjYzpde9Z%2FqaA8CEo6X52auMzXjIEW%2BIPJOzcZSQz06%2BoJYxSnldj8UQ%3D%3D')
        .then((response) => {
            var data = response.data.data;
            data.forEach((item) => {
                optionData.push({ value: item.기관명칭, label: item.기관명칭 });
            });
        })
        .catch((error) => {
            console.log(error);
        });

        return optionData;
    })

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
    const filterRaid = raidList.filter((raidinfo) => (
        raidinfo.merchantAddress.includes(selectLocation===null?'서울특별시':selectLocation) && (
        raidinfo.merchantName.includes(searchRaid) ||
        raidinfo.merchantAddress.includes(searchRaid) 
        )
        
    ));

    function selectRaid(raidId) {
        setSelectedData(raidList.find((selected) => (
            selected.raidId===raidId
        )))
        // data[index]를 선택된 데이터로 설정
        setModalOpen(true);  // 모달 오픈 
    }

    const onChange = (e) => {
        setSearchRaid(e.target.value);
    };

    const onChangeSelect = (e:any) => {
        if(e) setSelected(e.value);
        else setSelected('');
        // setSearchRaid(e.value);
        setSelectLocation(e.value);
    }


    return (
        <div>
            <Select
                onChange={onChangeSelect}
                options={option}
                placeholder='서울특별시'
                defaultValue='서울특별시'
            ></Select>
            <input 
                className='search' 
                placeholder='Search🔎' 
                onChange={onChange} 
            />
            <ul>
            {filterRaid.map((item, index) => (
                <li onClick={() => selectRaid(item.raidId)} className="raidList" key={item.raidId}>
                    <p>{item.merchantName}</p>
                    <p>상세주소 : {item.merchantAddress}</p>
                    <hr/>
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
