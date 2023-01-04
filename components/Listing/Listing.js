import listingCSS from "../../styles/Listing.module.css"
import Image from "next/image"
import beauty from "../images/beauty.png"

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()
  console.log(res, "data")

  return {
    props: {
      data,
    },
  }
}

const Listing = ({ data }) => {
  return (
    // <div className={listingCSS.main__div}>
    //   <div className={listingCSS.mainsub__div}>
    //     <div className={listingCSS.heading__div}>
    //       <div className={listingCSS.title__div}>
    //         <p className={listingCSS.para__div}>Mens Tailoring</p>
    //       </div>
    //     </div>
    //     <div className={listingCSS.array__div__main}>
    //       <div className={listingCSS.map__div}>
    //         {/* {listing?.map((listinga) => ( */}
    //         <div className={listingCSS.map__div2}>
    //           <div className={listingCSS.array__firstpart}>
    //             <div className={listingCSS.array__img}>
    //               <div className={listingCSS.img__heading}>
    //                 <Image className={listingCSS.img__general} src={beauty} />
    //                 <div className={listingCSS.array__title}>
    //                   <h3 className={listingCSS.heading__general}>
    //                     Salwar Kamiz
    //                   </h3>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className={listingCSS.price}>
    //               <div className={listingCSS.array__secondpart}>
    //                 <h3 className={listingCSS.array__price}>Rs:50</h3>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className={listingCSS.map__div2}>
    //           <div className={listingCSS.array__firstpart}>
    //             <div className={listingCSS.array__img}>
    //               <div className={listingCSS.img__heading}>
    //                 <Image className={listingCSS.img__general} src={beauty} />
    //                 <div className={listingCSS.array__title}>
    //                   <h3 className={listingCSS.heading__general}>
    //                     Salwar Kamiz
    //                   </h3>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className={listingCSS.price}>
    //               <div className={listingCSS.array__secondpart}>
    //                 <h3 className={listingCSS.array__price}>Rs:50</h3>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className={listingCSS.map__div2}>
    //           <div className={listingCSS.array__firstpart}>
    //             <div className={listingCSS.array__img}>
    //               <div className={listingCSS.img__heading}>
    //                 <Image className={listingCSS.img__general} src={beauty} />
    //                 <div className={listingCSS.array__title}>
    //                   <h3 className={listingCSS.heading__general}>
    //                     Salwar Kamiz
    //                   </h3>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className={listingCSS.price}>
    //               <div className={listingCSS.array__secondpart}>
    //                 <h3 className={listingCSS.array__price}>Rs:50</h3>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className={listingCSS.map__div2}>
    //           <div className={listingCSS.array__firstpart}>
    //             <div className={listingCSS.array__img}>
    //               <div className={listingCSS.img__heading}>
    //                 <Image className={listingCSS.img__general} src={beauty} />
    //                 <div className={listingCSS.array__title}>
    //                   <h3 className={listingCSS.heading__general}>
    //                     Salwar Kamiz
    //                   </h3>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className={listingCSS.price}>
    //               <div className={listingCSS.array__secondpart}>
    //                 <h3 className={listingCSS.array__price}>Rs:50</h3>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className={listingCSS.map__div2}>
    //           <div className={listingCSS.array__firstpart}>
    //             <div className={listingCSS.array__img}>
    //               <div className={listingCSS.img__heading}>
    //                 <Image className={listingCSS.img__general} src={beauty} />
    //                 <div className={listingCSS.array__title}>
    //                   <h3 className={listingCSS.heading__general}>
    //                     Salwar Kamiz
    //                   </h3>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className={listingCSS.price}>
    //               <div className={listingCSS.array__secondpart}>
    //                 <h3 className={listingCSS.array__price}>Rs:50</h3>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* ))} */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      {data?.map((curElem) => {
        return (
          <div key={curElem.id}>
            <h3>{curElem.id}</h3>

            <h2>{curElem.title}</h2>
          </div>
        )
      })}
    </>
  )
}

export default Listing
