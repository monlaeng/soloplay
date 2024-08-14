import React, {useEffect} from 'react';
import axios from 'axios';
import markerPic from 'asset/image/coffeeMonster.png';
const {kakao} = window;
const style = {width: "60%", height: "600px", margin: "0 auto"};
var geocoder;
var map;

function RaidMap(props) {

    useEffect(() => {
        if (kakao) {
            kakao.maps.load(() => {
                var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                mapOption = {
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };  
            
                // 지도를 생성합니다    
                map = new kakao.maps.Map(mapContainer, mapOption); 
                geocoder = new kakao.maps.services.Geocoder();
                
                if (navigator.geolocation) {    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다 

                    axios({
                        url:"/raid/raidList",
                        method:"get"
                    }).then((response) => {
                        response.data.map((item, index) => {
                            setLocation(item.merchantAddress, item.merchantName);
                        });
                    }).catch((error) => {
                        console.log(error);
                    });
                    
                    navigator.geolocation.getCurrentPosition(function(position) {   // GeoLocation을 이용해서 접속 위치를 얻어옵니다
                        
                        var lat = position.coords.latitude; // 위도
                        var lon = position.coords.longitude; // 경도
                        
                        var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                        var message = '<div style="padding:5px;">현재 위치</div>'; // 인포윈도우에 표시될 내용입니다
                        
                        displayMarker(locPosition, message);    // 마커와 인포윈도우를 표시합니다
                        map.setCenter(locPosition);  
                    });
                    
                } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
                    
                    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);    
                    var message = 'geolocation을 사용할수 없어요..';
                        
                    displayMarker(locPosition, message);
                            // 지도 중심좌표를 접속위치로 변경합니다
                    map.setCenter(locPosition);   
                }
            })
        }

    }, []);

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {

        var imageSrc = markerPic;
        var imageSize = new kakao.maps.Size(50, 50);
        var imageOption = {offset: new kakao.maps.Point(27, 69)};
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({  
            map: map, 
            position: locPosition,
            image: markerImage
        }); 

        marker.setMap(map);

        var content = `<div style="width:100%;text-align:center;padding:5px 10px; background-color:rgba(175, 102, 75, 0.82); color:white; font-weight:bold; border-radius:20px; border: none;">${message}</div>`;
        var customOverlay = new kakao.maps.CustomOverlay({
            map: map,
            position: locPosition,
            content: content,
            yAnchor: 1 
        });
    }   

    function setLocation(merchantAddress, merchantName) {
        geocoder.addressSearch(merchantAddress, function(result, status) {
        
            // 정상적으로 검색이 완료됐으면 
             if (status === kakao.maps.services.Status.OK) {
        
                var locPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
                displayMarker(locPosition, merchantName);
        
            } 
        }); 
    }

    return (
        <div>
            <div style={style} id="map"></div>
        </div>
    );
}

export default RaidMap;