import React from 'react';
import Container from '../Components/Container';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <div className="lg:py-40 py-20">
        <Container>
          <div className="text-justify leading-relaxed text-lg">
            <span className="block text-center"> Alhamdulillah dengan izin Allah Subhanahu Wata'ala kami telah menjalankan beberapa program yang sudah di rencanakan, diantaranya</span>
            <div className="bg-slate-950 shadow-lg shadow-gray-950 mt-5 px-4 py-6 rounded-lg ">
              <div className="mb-2.5 flex justify-between w-full gap-x-5">
                <details name="program" className="w-full bg-gradient-to-br from-slate-950 to-indigo-950 bg-indigo-950 px-4 py-2.5 rounded">
                  <summary className="font-semibold cursor-pointer">Gemma berbagi</summary>
                  <p className="mt-2.5">
                    Program ini dibuat dengan tujuan agar masyarakat disekitar masjid dapat terbantu dan merasakan berkah dari apa yang telah diterima. Program ini rencananya Insya Allah akan diadakan ditiap tahun dengan bertahap.
                  </p>
                  <img src="/images/image_2.jpg" alt="" width="400" className="rounded-full flex-1 justify-self-center my-3" />
                </details>
              </div>
              <div className="mb-2.5 flex justify-between w-full gap-x-5">
                <details name="program" className="w-full bg-gradient-to-br from-slate-950 to-indigo-950 bg-indigo-950 px-4 py-2.5 rounded">
                  <summary className="font-semibold cursor-pointer">Jum'at Berkah (Jumber)</summary>
                  <p className="mt-2.5">
                    Jumat berkah diadakan setiap 2 pekan sekali. Kami mengajak kepada Bapak dan Ibu yang ingin ikut mendermakan sebagian dari rezekinya baik itu berupa makanan, minuman ataupun dalam bentuk materi, silahkan hubungi kami.
                  </p>
                  <img src="/images/image_3.jpg" alt="" width="400" className="rounded-full flex-1 justify-self-center my-3" />
                </details>
              </div>
              <div className="mb-2.5 flex justify-between w-full gap-x-5">
                <details name="program" className="w-full bg-gradient-to-br from-slate-950 to-indigo-950 bg-indigo-950 px-4 py-2.5 rounded">
                  <summary className="font-semibold cursor-pointer">Pengkajian Ilmu Islam</summary>
                  <p className="mt-2.5">
                    Pengkajian ilmu islam diadakan setiap bulan dipekan kedua dan Insyaa Allah akan diadakan dipekan ke-4. Dengan adanya program ini diharapkan agar kita semua dapat mendapatkan ilmu yang diberikan dan dapat mengamalkan ilmu
                    tersebut dalam kehidupan.
                  </p>
                  <img src="/images/image_4.jpg" alt="" width="400" className="rounded-full flex-1 justify-self-center my-3" />
                </details>
              </div>
              <div className="mb-2.5 flex justify-between w-full gap-x-5">
                <details name="program" className="w-full bg-gradient-to-br from-slate-950 to-indigo-950 bg-indigo-950 px-4 py-2.5 rounded">
                  <summary className="font-semibold cursor-pointer">Santunan Yatim</summary>
                  <p className="mt-2.5">
                    Santunan yatim diberikan 2 kali dalam setahun yakni saat tahun baru hijriah dan juga menjelang hari raya Idul Fitr. Saat ini lingkupnya kecil hanya untuk masyarakat di RW 14 saja namun tidak menutup kemungkinan untuk
                    mencakup lingkup yang lebih besar lagi kelak dikemudian hari.
                  </p>
                  <img src="/images/image_5.jpg" alt="" width="400" className="rounded-full flex-1 justify-self-center my-3" />
                </details>
              </div>
            </div>
          </div>
          <div className="text-center">
            Doakan kami agar selalu istiqomah dalam kebaikan serta diberi kelancaran dalam menjalankan amanat ini. Sekiranya Bapak Ibu berkenan dan ingin berpartisipasi, silahkan klik{' '}
            <Link href="/contact" className="underline italic text-red-400 hover:text-red-600 hover:no-underline">
              tautan ini
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
