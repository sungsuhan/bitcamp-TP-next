import React from "react";
import styles from '@/styles/Footer.module.css'
export function Footer(){
    return (<footer>
                <hr/>
                <div data-attribute-id="weather" data-fnb-kind="investment">
                    <img style={{width:30}} src="https://health.chosun.com/site/data/img_dir/2017/03/31/2017033102055_1.jpg" alt="logo"/>
                    <a href="https://www.weather.go.kr/w/index.do/" target="_blank">서울 날씨</a> : 31ºC 맑음 
                </div>
            </footer>
    )
}