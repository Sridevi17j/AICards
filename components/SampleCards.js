import Image from 'next/image'
import { useState } from 'react'

const cards = [
  { id: 1, title: 'Birthday Card', image: 'https://fal.media/files/lion/N85OGo1Gs_0f32xmflwcZ_ee0166ab693b41ca96f958431f4f7807.jpg' },
  { id: 4, title: 'Anniversary Card', image: 'https://fal.media/files/koala/AU2K_Y2iCAtMMJUNqVuL9_b4d7c74653ed4db5bd5dc58cad79d4b5.jpg'},
  { id: 3, title: 'Thank You Card', image: 'https://fal.media/files/zebra/AlnNQs6ybK5k-dnVgqxEC_8d467c35eb354711a412ee4b61c676a7.jpg' },
  { id: 4, title: 'Cheers to Success Card', image: 'https://fal.media/files/monkey/8UEe5zhLo8m_2KAPyNxAX_28fff86c5e38474eb771667be88f2f03.jpg' },
  { id: 5, title: 'Halloween Card', image: 'https://fal.media/files/penguin/OMu5jdfASl5n5G_mAulj7_79d16dd4a82142a596984da4dd62b30b.jpg' },
  { id: 6, title: "Father's Day Card", image: 'https://fal.media/files/monkey/gFi3pub5lGO8otXqNe93D_00e11b94a8264e87af941be14caa9f8b.jpg' },
  { id: 7, title: "Valentine's Day Card", image: 'https://fal.media/files/penguin/yTaNZsv4-ZNdOhWqR5Ife_633ee6cad00f4be7974cab1331654741.jpg' },
  { id: 8, title: 'Miss You Card', image: 'https://fal.media/files/lion/WK6opk_7wJDcT9UFKKOgb_dcfb9b9d3a12433e83b069b658b5c016.jpg' },
  { id: 9, title: 'Easter Card', image: 'https://fal.media/files/lion/gAjff1tJmXezRDqNEyMgk_e7ab5b319011459d9f391be999ee4a46.jpg' },
  { id: 10, title: 'Birthday Card', image: 'https://fal.media/files/panda/Nv4KMUHsZWDZ-sbEpweLU_a644b3bd247c4c849a2ee56a80f94073.jpg' },
  { id: 11, title: 'Christmas Card', image: 'https://fal.media/files/zebra/QqQ5wyosNlZceEZUPybhx_da3abeaecb4a46a6ae6f2ce25164eeee.jpg' },
  { id: 12, title: "Valentine's Day Card", image: 'https://fal.media/files/monkey/RFj-x48dkPIF3t4ZfstBF_dfc3cf195ec44e88b8c4a3dbe3c80147.jpg' },
  { id: 13, title: 'Christmas Card', image: 'https://fal.media/files/koala/nVMnp6E3k95D1xzoYEVpG_cf7702727a1a45aa945c7b10ef2a4515.jpg' },
  { id: 14, title: 'Halloween Card', image: 'https://fal.media/files/kangaroo/TzFicUHUGP8q9xJfbswa3_b4d7b7ccc100409d8a9bc1bc4cc9a706.jpg' },
  { id: 15, title: "Baby Shower Card", image: 'https://fal.media/files/monkey/y7cBhDvzN4qKmEWG4bJg3_c639426dc5794b90beecaf85c735a02e.jpg' },
  { id: 16, title: "Friendship Day Card", image: 'https://fal.media/files/tiger/UU49aWZOdC3puVNC0qwOw_b7eadf2bd26148999dd9687d384e4b9f.jpg' },
  { id: 17, title: "Get Well Soon Card", image: 'https://fal.media/files/koala/nctXCF_WKp0hJA5BhSXjW_b6e4462ecc204804aafb4a5e08e44968.jpg' },
  { id: 18, title: "Sorry Card", image: 'https://fal.media/files/rabbit/NL4Kp8EhBhPz_yac2XU-x_82f70c316a8a41e59663742f767b35ac.jpg' },
  { id: 19, title: "Mother's day card", image: 'https://fal.media/files/monkey/HQjVD-31SPIAFuaD5jYTG_ea20bec39ead41d8b3c62fd1db565046.jpg' },
  { id:20, title: "Appreciation Card", image: 'https://fal.media/files/tiger/ectvvcm_vjnklKoJKb4Gh_06d911c6d56b4bd88b58e55ad2185560.jpg' },
]

export default function SampleCards() {
  const [enlargedImage, setEnlargedImage] = useState(null)

  const handleImageClick = (id) => {
    setEnlargedImage(enlargedImage === id ? null : id)
  }

  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Sample Cards</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative cursor-pointer transition-transform duration-300 ease-in-out rounded-lg shadow-md
              ${enlargedImage === card.id ? 'scale-105 z-10' : ''}
            `}
            onClick={() => handleImageClick(card.id)}
          >
            <div className="aspect-[3/4] w-full overflow-hidden rounded-lg">
              <div className="w-full h-full relative">
                <Image
                  src={card.image}
                  alt={`Sample card ${card.id}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
