import MainVideo from '../../assets/MainVideo.mp4';

const Video = () => {
    return (
        <div className="w-full h-full">
            <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover" 
                src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1776629704~exp=1776633304~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=3c777b9212d9d4e148254610bc76fefbe5d5f42abea65f2c293b5c9b0041f406&r=dXMtZWFzdDE%3D"
                onError={(e) => {
                    console.error('Video failed to load:', e);
                }}
            >
                <source src={MainVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video;
