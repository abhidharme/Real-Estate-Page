import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiHotelBedFill } from 'react-icons/ri';
import { MdOutlineBathtub } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { BiArea } from 'react-icons/bi';
import "./MyFavouriteList.css"
import { fetch_house_data } from '../../Redux/action';

export const MyFavouriteList = () => {

  const { Houses } = useSelector((state) => state.rentsHouses);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetch_house_data())
  }, []);


  return (
    <>
      <div className="mainBox" >
        <div className='box2'>
          {
            
            Houses.filter((el) => {
              return el.heart == "red";
            }).map((ele) => (
              <div key={ele.id}>
                <img src={ele.image} alt="House Image" width={'100%'} height={'180px'} />

                <div id="details">

                  <div id='dbox' >
                    <div><h5>{ele.title}</h5></div>
                    <div><h3 style={{ display: 'inline-block' }}>${ele.price}</h3><p style={{ display: 'inline-block' }}>/m</p></div>
                  </div>

                  <div id='line'></div>

                  <div id="roomsBox">
                    <div className='rooms'>
                      <div><RiHotelBedFill /></div>
                      <div>{ele.beds} Beds</div>
                    </div>

                    <div className='rooms'>
                      <div><MdOutlineBathtub /></div>
                      <div>{ele.bathrooms} Bathrooms</div>
                    </div>

                    <div className='rooms'>
                      <div><BiArea /></div>
                      <div><span>{ele.mm1}</span><span style={{ fontSize: '10px' }} >x</span><span>{ele.mm2}m²</span></div>
                    </div>
                  </div>

                </div>

                <hr />
                <div id="description" ><p><GoLocation style={{ color: "blue" }} />{' '}{ele.Address},{ele.Country}</p></div>
                <div id='heart'>  {ele.heart == "white" ? <AiOutlineHeart /> : <AiFillHeart />}</div>

              </div>
            ))
          }

        </div>
      </div>
      <br />
    </>
  )
}
