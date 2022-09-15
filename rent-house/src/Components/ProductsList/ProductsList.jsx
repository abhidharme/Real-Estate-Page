import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_house_data, patchFavourite } from '../../Redux/action';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { RiHotelBedFill } from 'react-icons/ri';
import { MdOutlineBathtub } from 'react-icons/md';
import { BiArea } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import "./ProductsList.css"
import { useSearchParams } from 'react-router-dom';

export const ProductsList = () => {


    const { Houses } = useSelector((state) => state.rentsHouses)
       
    const [searchParams, setsearchParams] = useSearchParams()

    const [search, setSearch] = useState();
    const [searchId, setSearchId] = useState();
    const [usLocation, setUsLocation] = useState(searchParams.getAll('Country') || []);
    const [selectPrice, setSelectPrice] = useState(searchParams.getAll('price') || []);
    const [selectProperty, setSelectProperty] = useState(searchParams.getAll('Property_type') || []);


    const dispatch = useDispatch();



    useEffect(() => {
        if (searchParams) {
            if (selectPrice == 500) {
                var lte = 2500;
            }
            else if (selectPrice == 2500) {
                var lte = 5000;
            }
            else {
                var lte = 8000
            }
            setsearchParams({ Country: usLocation, price_gte: selectPrice, price_lte: lte, Property_type: selectProperty }, { replace: true })
        }
        {/*Parameters pass api to filter*/ }

        var params = {
            Country: searchParams.getAll("Country"),
            price_gte: searchParams.getAll("price_gte"),
            price_lte: searchParams.getAll("price_lte"),
            Property_type: searchParams.getAll("Property_type")
        }

        dispatch(fetch_house_data(params));

    }, [usLocation, dispatch, setsearchParams, searchParams, selectPrice, selectProperty])

    {/*function to add property favourites*/ }
    const handleFavourite = (id, heart) => {
        if (heart == "white") {
            var redColor = "red";
        }
        else {
            var redColor = "white";
        }

        dispatch(patchFavourite(id, redColor));


        let params = {
            Country: searchParams.getAll("Country"),
            price_gte: searchParams.getAll("price_gte"),
            price_lte: searchParams.getAll("price_lte"),
            Property_type: searchParams.getAll("Property_type")
        }
        dispatch(fetch_house_data(params))

    }


    const changePrice = (e) => {
        var change = e.target.value;
        setSelectPrice(change);
        console.log(selectPrice)
    }

    const changeProperyType = (e) => {
        var change = e.target.value;
        setSelectProperty(change);
        console.log(selectProperty)
    }


    return (
        <div className='mainBox'>

            <div className='box1'>

                <div className='heading_title'><h2>Search Properties To Rent</h2></div>
                {/*Input Search box*/}
                <div className='SearchBox' >
                    <div id='inputBox' ><input onChange={(e) => setSearch(e.target.value)} placeholder='Enter Property Name' /></div>
                </div>

                <div id="filterButtons">
                    {/*Button to filter by location*/}
                    <div onClick={() => { setUsLocation("USA") }} ><GoLocation /> Location <br />
                        New York , USA
                    </div>

                    <div>
                        <label>When</label>
                        <br />
                        <input type={'date'} />{' '}Select Move-in date</div>
                    <div><label>Price</label>
                        <br />
                        {/*Select options for filter  by price*/}
                        <select onChange={changePrice} >
                            <option value={500} >$500-2,500</option>
                            <option value={2500}>$2,500-5000</option>
                            <option value={5000}>$5000-8000</option>
                        </select>
                    </div>
                    <div>
                        <label>Property type</label>
                        <br />
                        {/*Select options for filter by property type*/}
                        <select onChange={changeProperyType}>
                            <option value={'House'} >Houses</option>
                            <option value={'flat'}>Flats</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className='box2'>
                {
                    searchId > 0 ? Houses.filter((e) => {
                        return e.id == searchId;
                    }).map((ele) => (
                        <div key={ele.id}>
                            <img src={ele.image} alt="House Image" width={'100%'} height={'180px'} />

                            <div id="details">

                                <div id='dbox' >
                                    <div><h4>{ele.title}</h4></div>
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
                            <div id='heart' onClick={() => handleFavourite(ele.id, ele.heart)}>  {ele.heart == "white" ? <AiOutlineHeart /> : <AiFillHeart style={{ color: 'red' }} />}</div>

                        </div>
                    ))

                        :
                        Houses.map((ele) => (
                            <div key={ele.id}>
                                <img src={ele.image} alt="House Image" width={'100%'} height={'180px'} />

                                <div id="details">

                                    <div id='dbox' >
                                        <div><h4>{ele.title}</h4></div>
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
                                <div id='heart' onClick={() => handleFavourite(ele.id, ele.heart)}>  {ele.heart == "white" ? <AiOutlineHeart /> : <AiFillHeart style={{ color: 'red' }} />}</div>

                            </div>
                        ))
                }

            </div>
            <br />
            {/*div for for search suggestion titles*/}
            <div id="searchdiv" >
                {
                    Houses.filter((value) => {
                        if (search == "") {
                            return ""
                        }
                        else if (value.title.toLowerCase().includes(search)) {
                            return value;
                        }
                    })
                        .map((item) => <div onClick={() => setSearchId(item.id)} style={{ textDecoration: "none", color: "white" }}><p key={item.id} >{item.title}<hr></hr></p></div>)
                }
            </div>

        </div>
    )
}
