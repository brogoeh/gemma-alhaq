import React from 'react';
import Container from '../Components/Container';

export default function page() {
  return (
    <>
      <div className="py-40">
        <Container>
          <div className="leading-relaxed text-lg text-center">
            <span className="block">Jika Bapak dan Ibu ingin ikut berpartisipasi dan berdonasi, bisa melalui rekening kami dibawah ini</span>
            <span className="block underline">Rekening BSI</span>
            <span className="block bg-gradient-to-bl from-gray-900 to-slate-900 w-fit mx-auto text-3xl my-5 py-3 px-5 font-bold rounded-md shadow-lg shadow-indigo-900 italic">6363 1111 63</span>
            <span>a/n Generasi Muda Masjid Al-Haq</span>
            <span className="block mt-10 text-2xl capitalize font-semibold">
              "jazakumullah khairan katsiran" <span className="block">(جَزَاكُمُ اللهُ خَيْرًا كَثِيْرًا)</span>
            </span>
          </div>
        </Container>
      </div>
    </>
  );
}
