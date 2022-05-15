import styles from "@/styles/Home.module.css";

export function Home() {
    return (
        <> 
        <header className = {styles.w3DisplayContainer+ ' ' + styles.w3Content+ ' ' + styles.w3Center} style = {{maxWidth:"1500px"}} > <img
        className={styles.w3Image}
            src="http://shopimg.co.kr//shoppingmall/TN/AHS000301_01.jpg"
            alt="Me"
            width="800"
            height="777"/>
        
        </header>

    
    

    </>)
}