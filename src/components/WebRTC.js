import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./WebRTC.css";
import Navbar from "./Navbar/Navbar";

const socket = io();

const WebRTC = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [isCalling, setIsCalling] = useState(false);
  const [error, setError] = useState(null);
  const [roomID, setRoomID] = useState("");
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: isVideoEnabled, audio: isAudioEnabled })
      .then((stream) => {
        setLocalStream(stream);
      })
      .catch((error) => {
        setError(error.message);
      });

    socket.on("offer", (offer) => {
      handleOffer(offer);
    });

    socket.on("answer", (answer) => {
      handleAnswer(answer);
    });

    socket.on("ice-candidate", (candidate) => {
      handleIceCandidate(candidate);
    });

    return () => {
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
      if (remoteStream) {
        remoteStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isVideoEnabled, isAudioEnabled]);

  useEffect(() => {
    if (localStream && localVideoRef.current) {
      localVideoRef.current.srcObject = localStream;
    }
  }, [localStream]);

  useEffect(() => {
    if (remoteStream && remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  const handleOffer = (offer) => {
    // Handle incoming offer
    // Create RTCPeerConnection, set remote description, create answer, etc.
  };

  const handleAnswer = (answer) => {
    // Handle incoming answer
    // Set remote description, etc.
  };

  const handleIceCandidate = (candidate) => {
    // Handle incoming ICE candidate
    // Add ICE candidate to peer connection, etc.
  };

  const call = () => {
    // Toggle call status between calling and not calling
    setIsCalling((prevIsCalling) => !prevIsCalling);
    if (!isCalling) {
      // If initiating the call, create offer, set local description, etc.
      // Send offer to signaling server
    } else {
      // If ending the call, stop the local stream and close the peer connection
      setIsCalling(false);
      if (localStream) {
        localStream.getTracks().forEach((track) => track.stop());
      }
      // Implement logic to close peer connection, send signal to remote peer, etc.
    }
  };

  const joinCall = () => {
    if (roomID) {
      // Implement logic to join the call using the provided room ID
      // Connect to the signaling server and send the room ID
      // Signaling server will broadcast the room ID to other users in the same room
    } else {
      alert("Please enter a room ID to join the call.");
    }
  };

  const toggleVideo = () => {
    setIsVideoEnabled((prev) => !prev);
  };

  const toggleAudio = () => {
    setIsAudioEnabled((prev) => !prev);
  };

  return (
    <div>
      <Navbar />
      <h1 className="liveclass-title"></h1>
      {error && <p>Error: {error}</p>}
      <div className="liveclass-video">
        {localStream && (
          <video autoPlay ref={localVideoRef} muted={!isAudioEnabled} />
        )}
        {remoteStream && <video autoPlay ref={remoteVideoRef} />}
      </div>
      <div className="liveclass-actions">
        {!isCalling ? (
          <>
            <button onClick={call} className="join-call">
              <box-icon name="phone" type="solid"></box-icon>
            </button>
            <div className="search" style={{marginRight:"10px"}}>
              <input
                type="text"
                value={roomID}
                onChange={(e) => setRoomID(e.target.value)}
                placeholder="Enter room ID"
              />
              <button type="submit" onClick={joinCall}>Join Call</button>
            </div>
          </>
        ) : (
          <button onClick={call} className="end-call">
            <box-icon name="phone-off"></box-icon>
          </button>
        )}
        <button onClick={toggleVideo} className="video-icon">
          {isVideoEnabled ? <box-icon name='video'></box-icon> : <box-icon name='video-off' ></box-icon>}
        </button>
        <button onClick={toggleAudio} className="audio-icon">
          {isAudioEnabled ? <box-icon name='microphone'></box-icon> : <box-icon name='microphone-off'></box-icon>}
        </button>
      </div>
    </div>
  );
};

export default WebRTC;
