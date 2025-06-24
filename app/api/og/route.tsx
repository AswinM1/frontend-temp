import { ImageResponse } from 'next/og';
 
export async function GET() {
  return new ImageResponse(
    (
      <div className='font-sans font-bold text-2xl'
        style={{
          background: 'linear-gradient(to top, purple 20%, yellow 40%, green,transparent 50%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"#121212",
          color:"white",
          fontWeight:"bold",
          fontSize:"72px",
          letterSpacing:"-3px"  

        
        
        }}
      >
       
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
