
const LoadingScreen = ({ percentage, backgroundImage }) => {
  const gradientStyle = {
    background: `-webkit-linear-gradient(90deg, #E0E0E0 0%, #FFC3DD 27.48%, #E973C4 58.15%, #9545F6 100%)`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };
  const percentageDigits = percentage.toString().split('');
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center z-10 bg-black" style={{ backgroundImage: `url(${backgroundImage})` ,backgroundSize: 'cover' ,boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 10, 0.3)'}}>
      
        <div className='text-white text-2xl fixed left-4 top-10 ' style={gradientStyle}>
          <img src="/logo.png" alt="" />
        </div>
        <div className="flex justify-between w-full mb-8">
          <div className="text-4xl ml-4" style={percentage >= 20 ? gradientStyle : {}}>
            You think
          </div>
          <div className="text-4xl mr-4" style={percentage >= 80 ? gradientStyle : {}}>
            We create
          </div>
        </div>
        <div className="relative w-full bg-gray-300 rounded-full mb-4 drop-shadow-2xl" style={{ height: '8px', borderRadius: '4px', position: 'relative' }}>
          <div
            className="absolute top-0 left-0 h-full -z-50"
            style={{ width: `${percentage}%`, background: 'linear-gradient(90deg, #E0E0E0 0%, #FFC3DD 27.48%, #E973C4 58.15%, #9545F6 100%)', color: '#DEDEDE' }}
          ></div>
          <div style={{ fontFamily: 'Hind Siliguri, sans-serif',lineHeight: '200px' ,fontWeight: 100, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} className="text-white font-medium z-40 responsive-font">
            {percentage}
       
            </div>
        </div>
      </div>
      
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Hind+Siliguri:wght@600&family=Syne:wght@500;600&display=swap" rel="stylesheet"/>

      <style>
        
        {`
          @media screen and (max-width: 768px) {
            .text-2xl {
              font-size: 0.5rem;
            }
            .text-4xl {
              font-size: 1rem;
            }
            .text-9xl {
              font-size: 2rem;
            }
            .mb-8 {
              margin-bottom: 1rem;
            }
            .ml-4, .mr-4 {
              margin-left: 1rem;
              margin-right: 1rem;
            }
          }

          @media screen and (max-width: 768px) {
            .responsive-font {
              font-size: 6rem;
            }
          }

          @media screen and (min-width: 769px) and (max-width: 1023px) {
            .responsive-font {
              font-size: 10rem;
            }
          }

          @media screen and (min-width: 1024px) and (max-width: 1279px) {
            .responsive-font {
              font-size: 15rem;
            }
          }

          @media screen and (min-width: 1280px) and (max-width: 1535px) {
            .responsive-font {
              font-size: 15rem;
            }
          }

          @media screen and (min-width: 1536px) {
            .responsive-font {
              font-size: 15rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default LoadingScreen;

