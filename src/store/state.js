import cats from '@/data/Cats.js'
import dogs from '@/data/Dogs.js'

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs]
}
