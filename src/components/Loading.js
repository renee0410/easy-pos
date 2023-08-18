import ReactLoading from 'react-loading';

export function Loading() {
  return (
      <div className='loadingStyle'>
        <ReactLoading type='spokes' color='black' height={50} width={50} />
      </div> 
  )
}