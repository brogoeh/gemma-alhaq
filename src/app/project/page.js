import React from 'react';
import Container from '../Components/Container';

export default function page() {
  return (
    <>
      <div className="py-40">
        <Container>
          <div className="text-justify">
            Alhamdulillah dengan izin Allah Subhanahu Wata'ala kami telah menjalankan beberapa program yang sudah di rencanakan, diantaranya
            <div className="bg-slate-950 shadow-lg shadow-gray-900 mt-5 px-4 py-6 rounded-lg">
              <div className="mb-1 flex justify-between w-full gap-x-5">
                <details name="program">
                  <summary>Gemma berbagi</summary>
                  <p className="mb-6 mt-1">
                    Program ini dibuat dengan tujuan agar masyarakat disekitar masjid dapat terbantu dan merasakan berkah dari apa yang telah diterima. Program ini rencananya Insya Allah akan diadakan ditiap tahun dengan dibagi beberapa
                    tahapan
                  </p>
                  {/* <div className="berbagi_satu mb-2.5"></div> */}
                  <img src="/images/image_2.jpg" alt="" width="400" className="rounded-full flex-1 justify-self-center my-3" />
                </details>
              </div>
              <div className="mb-1 flex justify-between w-full gap-x-5">
                <details name="program">
                  <summary>Jum'at Berkah (Jumber)</summary>
                  <p>
                    Jumat berkah diadakan setiap 2 pekan sekali. Kami mengajak kepada Bapak dan Ibu yang ingin ikut mendermakan sebagian dari rezekinya baik itu berupa makanan, minuman ataupun dalam bentuk materi, silahkan hubungi kami.
                  </p>
                  {/* <div className="berbagi_dua mb-2.5"></div> */}
                  <img src="/images/image_3.jpg" alt="" width="400" className="rounded-full flex-1 justify-self-center my-3" />
                </details>
              </div>
              <div className="mb-1 flex justify-between w-full gap-x-5">
                <details name="program">
                  <summary>Pengkajian Ilmu Islam</summary>
                  <p>
                    Pengkajian ilmu islam diadakan setiap bulan dipekan kedua dan Insyaa Allah akan diadakan dipekan ke-4. Dengan adanya program ini diharapkan agar kita semua dapat mendapatkan ilmu yang diberikan dan dapat mengamalkan ilmu
                    tersebut dalam kehidupan
                  </p>
                  {/* <div className="berbagi_tiga mb-2.5"></div> */}
                  <img src="/images/image_4.jpg" alt="" width="400" className="rounded-full flex-1 justify-self-center my-3" />
                </details>
              </div>
              <div className="mb-1 flex justify-between w-full gap-x-5">
                <details name="program">
                  <summary>Santunan Yatim</summary>
                  <p>
                    Santunan yatim diberikan 2 kali dalam setahun yakni saat tahun baru hijriah dan juga menjelang hari raya Idul Fitr. Saat ini lingkupnya kecil hanya untuk masyarakat di RW 14 saja namun tidak menutup kemungkinan untuk
                    mencakup lingkup yang lebih besar lagi kelak dikemudian hari.
                  </p>
                  {/* <div className="berbagi_empat mb-2.5"></div> */}
                  <img src="/images/image_5.jpg" alt="" width="400" className="rounded-full flex-1 justify-self-center my-3" />
                </details>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
