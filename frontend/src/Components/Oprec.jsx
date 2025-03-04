import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import { useSelector } from "react-redux";

const Oprec = ({ text }) => {
    const {data, langs} = useSelector(state => state.LangReducer);
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div className='container mx-auto my-24 relative w-full'>
      <div className='flex items-center justify-center w-full h-full'>
        <div
          className='relative w-9/12 flex bg-[#02264A] rounded-2xl py-16 px-14 overflow-hidden'
          style={{
            backgroundImage: "url('/assets/card-texture.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className='flex flex-col justify-center text-white w-7/12'>
            <h2 className='font-semibold text-4xl'>{text.title}</h2>
            <p className='mt-4 text-lg font-light'>{text.desc}</p>
            <div className='mt-12'>
              <button
                onClick={showModal}
                className="px-8 py-4 bg-[#FFCC00] tracking-wide mt-2 text-base text-[#252525] font-semibold rounded-3xl transition-all duration-300 hover:bg-yellow-500 hover:text-black"
              >
                Learn More
              </button>
            </div>
          </div>

          <img
            src="/assets/oprec.png"
            alt="Oprec"
            className='absolute top-1/2 right-10 transform -translate-y-1/2 h-auto w-[30%] object-cover z-30'
          />
        </div>
      </div>

      {/* Modal */}
        {/* Modal */}
<Modal
  visible={isModalVisible}
  onCancel={handleCancel}
  footer={null}
  width={800}
  className="rounded-lg"
>
  <div className="p-6">
    <h2 className="font-bold text-2xl mb-4">
      {langs ? "Registration Process" : "Proses Pendaftaran"}
    </h2>
    <p className="mb-4">
      <strong>
        {langs
          ? "Mandarin Tutor and Scholarship Mentor at Active Mandarin Indonesia"
          : "Tutor Mandarin dan Mentor Beasiswa di Active Mandarin Indonesia"}
      </strong>
    </p>

    <h3 className="font-semibold mt-4">
      {langs ? "1. Registration" : "1. Pendaftaran"}
    </h3>
    <ul className="list-disc ml-5 mb-4">
      <li>
        {langs
          ? "Visit the official website or registration platform."
          : "Mengunjungi situs web resmi atau platform pendaftaran."}
      </li>
      <li>
        {langs
          ? "Complete the registration form with personal details and qualifications."
          : "Mengisi formulir pendaftaran dengan data diri dan kualifikasi."}
      </li>
      <li>
        {langs
          ? "Upload supporting documents (CV, certificates, etc.)."
          : "Mengunggah dokumen pendukung (CV, sertifikat, dll.)."}
      </li>
    </ul>

    <h3 className="font-semibold mt-4">
      {langs ? "2. Administrative Selection" : "2. Seleksi Administratif"}
    </h3>
    <ul className="list-disc ml-5 mb-4">
      <li>
        {langs
          ? "Verify documents and qualifications."
          : "Verifikasi dokumen dan kualifikasi."}
      </li>
      <li>
        {langs
          ? "Evaluate compatibility with mentor criteria."
          : "Penilaian kesesuaian dengan kriteria mentor."}
      </li>
    </ul>

    <h3 className="font-semibold mt-4">
      {langs ? "3. Mandarin Language Test" : "3. Tes Bahasa Mandarin"}
    </h3>
    <ul className="list-disc ml-5 mb-4">
      <li>
        {langs
          ? "Assess Mandarin proficiency in speaking, listening, reading, and writing."
          : "Menguji kemampuan berbahasa Mandarin dalam berbicara, mendengar, membaca, dan menulis."}
      </li>
    </ul>

    <h3 className="font-semibold mt-4">
      {langs ? "4. Interview" : "4. Wawancara"}
    </h3>
    <ul className="list-disc ml-5 mb-4">
      <li>
        {langs
          ? "Learn more about the candidate's background and experience."
          : "Mengenal lebih dalam tentang latar belakang dan pengalaman kandidat."}
      </li>
      <li>
        {langs
          ? "Evaluate teaching and communication skills."
          : "Menilai kemampuan mengajar dan komunikasi."}
      </li>
    </ul>

    <h3 className="font-semibold mt-4">
      {langs ? "5. Final Selection" : "5. Seleksi Akhir"}
    </h3>
    <ul className="list-disc ml-5 mb-4">
      <li>
        {langs
          ? "Overall evaluation of test and interview results."
          : "Penilaian keseluruhan dari hasil tes dan wawancara."}
      </li>
      <li>
        {langs
          ? "Announcement of selection results."
          : "Pengumuman hasil seleksi."}
      </li>
    </ul>

    <h3 className="font-semibold mt-4">
      {langs ? "6. Onboarding" : "6. Onboarding"}
    </h3>
    <ul className="list-disc ml-5 mb-4">
      <li>
        {langs
          ? "Introduction to programs and curriculum."
          : "Pengenalan program dan kurikulum."}
      </li>
      <li>
        {langs ? "Mentor training." : "Pelatihan mentor."}
      </li>
      <li>
        {langs ? "Assignment as a mentor." : "Penugasan sebagai mentor."}
      </li>
    </ul>

    <h3 className="font-semibold mt-4">
      {langs
        ? "Required Documents (For Tutors)"
        : "Dokumen yang Diperlukan (Untuk Tutor)"}
    </h3>
    <ul className="list-disc ml-5 mb-4">
      <li>{langs ? "CV" : "CV"}</li>
      <li>
        {langs
          ? "Mandarin teaching certificate"
          : "Sertifikat pengajaran bahasa Mandarin"}
      </li>
      <li>
        {langs ? "Educational diploma" : "Ijazah pendidikan"}
      </li>
      <li>{langs ? "Identity document" : "Dokumen identitas"}</li>
      <li>
        {langs
          ? "Proof of teaching experience"
          : "Bukti pengalaman mengajar"}
      </li>
    </ul>

    <h3 className="font-semibold mt-4">
      {langs
        ? "Required Documents (For Scholarship Mentors)"
        : "Dokumen yang Diperlukan (Untuk Mentor Beasiswa)"}
    </h3>
    <ul className="list-disc ml-5 mb-4">
      <li>{langs ? "CV" : "CV"}</li>
      <li>
        {langs
          ? "Education certificate (Bachelor’s, Master’s, or Doctorate)"
          : "Sertifikat pendidikan (S1, S2, atau S3)"}
      </li>
      <li>
        {langs
          ? "Identity document (ID card/passport)"
          : "Dokumen identitas (KTP atau Paspor)"}
      </li>
      <li>
        {langs
          ? "Language certificate (HSK/IELTS/TOEFL)"
          : "Sertifikat bahasa (HSK/IELTS/TOEFL)"}
      </li>
    </ul>

    <h3 className="font-semibold mt-4">
      {langs ? "Mentor Criteria" : "Kriteria Mentor"}
    </h3>
    <p className="mt-2 font-semibold">
      {langs ? "For Tutors:" : "Untuk Tutor:"}
    </p>
    <ul className="list-disc ml-5 mb-4">
      <li>
        {langs
          ? "Fluent in Mandarin"
          : "Kemampuan berbahasa Mandarin dengan lancar"}
      </li>
      <li>
        {langs
          ? "Minimum 1 year of teaching experience"
          : "Pengalaman mengajar minimal 1 tahun"}
      </li>
      <li>
        {langs
          ? "Mandarin teaching certificate"
          : "Sertifikat pengajaran bahasa Mandarin"}
      </li>
      <li>
        {langs ? "Good communication skills" : "Kemampuan komunikasi yang baik"}
      </li>
      <li>
        {langs
          ? "Patience and effective teaching abilities"
          : "Kesabaran dan kemampuan mengajar yang efektif"}
      </li>
    </ul>

    <p className="mt-2 font-semibold">
      {langs ? "For Scholarship Mentors:" : "Untuk Mentor Beasiswa:"}
    </p>
    <ul className="list-disc ml-5 mb-4">
      <li>
        {langs
          ? "Minimum education level: Bachelor’s degree"
          : "Pendidikan minimal S1"}
      </li>
      <li>
        {langs
          ? "Knowledge of education in China/Taiwan"
          : "Pengetahuan tentang pendidikan di China atau Taiwan"}
      </li>
      <li>
        {langs ? "Good communication skills" : "Kemampuan komunikasi yang baik"}
      </li>
      <li>
        {langs
          ? "Analytical and problem-solving skills"
          : "Kemampuan analisis dan pemecahan masalah"}
      </li>
    </ul>

    <h3 className="font-semibold mt-4">{langs ? "Tips" : "Tips"}</h3>
    <ul className="list-disc ml-5 mb-4">
      <li>
        {langs
          ? "Ensure documents are complete and accurate."
          : "Pastikan dokumen lengkap dan akurat."}
      </li>
      <li>
        {langs
          ? "Prepare for the knowledge test."
          : "Persiapkan diri untuk tes pengetahuan."}
      </li>
      <li>
        {langs
          ? "Demonstrate good communication skills."
          : "Tunjukkan kemampuan komunikasi yang baik."}
      </li>
      <li>
        {langs
          ? "Ask questions about the program."
          : "Tanyakan pertanyaan tentang program."}
      </li>
    </ul>

    <div className="text-center mt-12">
      <a
        href="https://forms.gle/s1DuHDGpyUiwPjXp8"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-[#FFCC00] text-base text-[#252525] font-semibold rounded-3xl hover:bg-yellow-500 transition-all duration-300"
      >
        {langs ? "Join Us" : "Gabung Sekarang"}
      </a>
    </div>
  </div>
</Modal>

    </div>
  )
}

export default Oprec
