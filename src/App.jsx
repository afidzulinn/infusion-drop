// import React, { useState, useEffect, useRef } from "react";
// import * as tf from "@tensorflow/tfjs";
// import "@tensorflow/tfjs-backend-webgl"; // set backend to webgl
// import Loader from "./components/loader";
// import ButtonHandler from "./components/btn-handler";
// import { detect, detectVideo } from "./utils/detect";
// import "./style/App.css";
// import Timer from "./Timer";
// import { CircularProgressbar } from "react-circular-progressbar";
// import 'react-circular-progressbar/dist/styles.css';
// import { ButtonWebcamComponent } from "./components/ButtonWebcamComponent";

// const App = () => {
//   const [loading, setLoading] = useState({ loading: true, progress: 0 }); // loading state
//   const [isDrop, setIsDrop] = useState(false);
//   const [model, setModel] = useState({
//     net: null,
//     inputShape: [1, 0, 0, 3],
//   }); // init model & input shape
//   const [calculateDrop, setCalculateDrop] = useState(0);
//   // references
//   const imageRef = useRef(null);
//   const cameraRef = useRef(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   // model configs
//   const modelName = "fix";

//   useEffect(() => {
//     // document.body.style.overflow = "hidden"
//     tf.ready().then(async () => {
//       const yolov8 = await tf.loadGraphModel(
//         `${window.location.href}/${modelName}_web_model/model.json`,
//         {
//           onProgress: (fractions) => {
//             setLoading({ loading: true, progress: fractions }); // set loading fractions
//           },
//         }
//       ); // load model

//       // warming up model
//       const dummyInput = tf.ones(yolov8.inputs[0].shape);
//       const warmupResults = yolov8.execute(dummyInput);

//       setLoading({ loading: false, progress: 1 });
//       setModel({
//         net: yolov8,
//         inputShape: yolov8.inputs[0].shape,
//       }); // set model & input shape

//       tf.dispose([warmupResults, dummyInput]); // cleanup memory
//     });
//   }, []);

//   const handleCalculate = (status) => {
//     setIsDrop(status)
//   }

//   useEffect(() => {
//     if (isDrop) {
//       setCalculateDrop(current => current + 1)
//     }
//   }, [isDrop])

//   const [timer, setTimer] = useState(60);
//   const [play, setPlay] = useState(false);

//   useEffect(() => {
//     let time = null;
//     if (play) {
//       time = setInterval(() => {
//         setTimer(current => {
//           if (current === 0) {
//             setPlay(false)
//             clearInterval(time)
//             return 60;
//           } else {
//             return current - 1
//           }
//         });
//       }, 1000);
//     }
//     return () => {
//       setTimer(60)
//       clearInterval(time);
//     };
//   }, [play])

//   if (loading.loading) {
//     return <Loader>Loading model... {(loading.progress * 100).toFixed(2)}%</Loader>
//   }

//   return (
//     <div style={{ width: '100vw', height: '100vh', padding: 0, margin: 0, }} className="">
//       <div className="content">
//         <video
//           autoPlay
//           muted
//           ref={cameraRef}
//           onPlay={() => detectVideo(cameraRef.current, model, canvasRef.current, handleCalculate)}
//         />
//         <canvas width={model.inputShape[1]} height={model.inputShape[2]} ref={canvasRef} />
//       </div>
//       <Timer value={timer} drop={calculateDrop} />
//       <div style={{ width: '100vw', position: 'absolute', top: '20px' }}>
//         <h3></h3>
//       </div>
//       <div style={{ width: '100vw', display: 'flex', flexDirection:"column", position: 'absolute', bottom: 0, zIndex: 3, justifyContent: 'center' }}>
//         <div className="status" style={{marginBottom: '8px', width:"80%", alignSelf:'center'}}><h3 style={{textAlign:'center', margin:"4px, 0"}}>Drop Stats in one minutes : {calculateDrop}</h3></div>
//         <ButtonWebcamComponent imageRef={imageRef} cameraRef={cameraRef} videoRef={videoRef} setPlay={setPlay} timer={timer} />
//       </div>
//     </div>
//   );
// };
// export default App;

import React, { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Loader from "./components/loader";
import ButtonHandler from "./components/btn-handler";
import { detect, detectVideo } from "./utils/detect";
import "./style/App.css";
import Timer from "./Timer";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { ButtonWebcamComponent } from "./components/ButtonWebcamComponent";
import Login from './Login';
import SignUp from './SignUp';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <Loader>Loading...</Loader>;
  return user ? children : <Navigate to="/login" />;
};

const MainApp = () => {
  const [loading, setLoading] = useState({ loading: true, progress: 0 });
  const [isDrop, setIsDrop] = useState(false);
  const [model, setModel] = useState({ net: null, inputShape: [1, 0, 0, 3] });
  const [calculateDrop, setCalculateDrop] = useState(0);
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const cameraRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const modelName = "fix";

  useEffect(() => {

    const auth = localStorage.getItem('token');
    console.log(auth)
    if(auth == null){
      navigate('/login')
      // <Navigate to={"/login"}></Navigate>
    }
    tf.ready().then(async () => {
      const yolov8 = await tf.loadGraphModel(
        `${window.location.href}/${modelName}_web_model/model.json`,
        {
          onProgress: (fractions) => {
            setLoading({ loading: true, progress: fractions });
          },
        }
      );

      const dummyInput = tf.ones(yolov8.inputs[0].shape);
      const warmupResults = yolov8.execute(dummyInput);

      setLoading({ loading: false, progress: 1 });
      setModel({
        net: yolov8,
        inputShape: yolov8.inputs[0].shape,
      });

      tf.dispose([warmupResults, dummyInput]);
    });
  }, []);

  const handleCalculate = (status) => {
    setIsDrop(status);
  };

  useEffect(() => {
    if (isDrop) {
      setCalculateDrop((current) => current + 1);
    }
  }, [isDrop]);

  const [timer, setTimer] = useState(60);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    let time = null;
    if (play) {
      time = setInterval(() => {
        setTimer((current) => {
          if (current === 0) {
            setPlay(false);
            clearInterval(time);
            return 60;
          } else {
            return current - 1;
          }
        });
      }, 1000);
    }
    return () => {
      setTimer(60);
      clearInterval(time);
    };
  }, [play]);

  if (loading.loading) {
    return <Loader>Loading model... {(loading.progress * 100).toFixed(2)}%</Loader>;
  }

  return (
    <div style={{ width: '100vw', height: '100vh', padding: 0, margin: 0 }}>
      <div className="content">
        <video
          autoPlay
          muted
          ref={cameraRef}
          onPlay={() => detectVideo(cameraRef.current, model, canvasRef.current, handleCalculate)}
        />
        <canvas width={model.inputShape[1]} height={model.inputShape[2]} ref={canvasRef} />
      </div>
      <Timer value={timer} drop={calculateDrop} />
      <div style={{ width: '100vw', position: 'absolute', top: '20px' }}>
        <h3></h3>
      </div>
      <div style={{ width: '100vw', display: 'flex', flexDirection: "column", position: 'absolute', bottom: 0, zIndex: 3, justifyContent: 'center' }}>
        <div className="status" style={{ marginBottom: '8px', width: "80%", alignSelf: 'center' }}>
          <h3 style={{ textAlign: 'center', margin: "4px, 0" }}>Drop Stats in one minutes : {calculateDrop}</h3>
        </div>
        <ButtonWebcamComponent imageRef={imageRef} cameraRef={cameraRef} videoRef={videoRef} setPlay={setPlay} timer={timer} />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ProtectedRoute><MainApp /></ProtectedRoute>} />
        {/* <Redirect from="/" to="/login" /> */}
      </Routes>
    </Router>
  );
};

export default App;