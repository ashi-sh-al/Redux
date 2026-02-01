import {useDispatch, useSelector} from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'

const CollectionPage = () => {

  const dispatch = useDispatch()

  const clear = () => {
    dispatch(clearCollection())
  }

  const collection = useSelector(state => state.collection.items)
  return (
    <div className='overflow-auto px-10 py-10'>
      
      {collection.length > 0 ? <div className='flex justify-between mb-5 '>
        <h2 className='text-2xl '>Your Collection</h2>
        <button 
        className='text-xl bg-red-950 px-4 py-2 rounded-2xl active:scale-95 cursor-pointer'
        onClick={()=> {
          clear()
        }}
        >Clear Collection</button>
      </div>
      :
      <h2 className='text-2xl text-center'>Collection is Empty</h2>
      }

      <div className="flex flex-wrap justify-start items-center h-[80%] gap-2">
      {
        collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item = {item} />
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default CollectionPage
