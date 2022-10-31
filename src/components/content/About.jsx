import React from 'react';

const About = () => {
  return (
    <>
      <div className='about'>
        <img src={`https://firebasestorage.googleapis.com/v0/b/react-34755-2022-3809c.appspot.com/o/Imagenes%2Fstaff.jpg?alt=media&token=3a5a6283-6abd-4a5a-8250-e00dc30a8af9`} className="staffImg" alt="staff" />
        <h4 className='staffTxt'>Somos una hamburguesería con ganas de hacer las cosas de manera diferente. En COPE vas a encontrar lugares descontracturados, buena música, buena onda y hamburguesas increíbles. Nuestras cocinas están siempre a la vista para que puedas ver el proceso de todo lo que comés.</h4>
        <h4>¡Queremos que te sientas como en tu casa!</h4>
      </div>
    </>
  );
}

export default About;
