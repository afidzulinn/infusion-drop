import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './style/App.css'
const Timer = ({ value}) => {
    return (
        <>
            <div style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3, top: 0, position: 'absolute', marginTop: '16px' }}>
                <div style={{ width: 150, height: 150, }}>
                    <CircularProgressbar value={value} styles={{color:"#0000"}} minValue={0} maxValue={60} text={value}>
                    </CircularProgressbar>
                </div>
            </div>
        </>
    )
}

export default Timer