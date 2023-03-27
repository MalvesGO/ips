import {useState, useEffect} from 'react'

import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'

const Carrousel = () => {

  const [banners, setBanners] = useState([banner1, banner2, banner3])

  useEffect(() => {
    const interval = setInterval(() => {
      setBanners(banners => {
        const [first, ...rest] = banners
        return [...rest, first]
      })
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {banners.map((banner, index) => (
        <img
          key={index}
          src={banner}
          alt="banner"
          style={{
            width: '100%',
            height: 'auto',
            display: index === 0 ? 'block' : 'none'
          }}
        />
      ))}
    </div>
  )
}

export default Carrousel