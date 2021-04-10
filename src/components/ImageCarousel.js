import React from 'react';
import Carousel from 'react-material-ui-carousel'


function ImageCarousel(props)
{
    var items = [
        "https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Certified_Refurbished/XCM_Manual_1314988_1619964_CA_ca_gw_pc_tallhero_2x_ca_en_3736890_1500x600_1X_en_CA._CB658037126_.jpg",

        "https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/YjdiZWM5NmEt/YjdiZWM5NmEt-MzJmMDM2Y2It-w1500._CB658368261_.jpg",

        "https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/ZGU1ZTAyOWIt/ZGU1ZTAyOWIt-YTU0YWQzYjYt-w1500._CB655559622_.jpg",

        "https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MzNlZDY2NDkt/MzNlZDY2NDkt-MGEzMTcwZjgt-w1500._CB657224410_.jpg"
    ]



    return (
        <Carousel interval={7000}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item({item})
{
    

    return (   
            <img className="home__image" src={item}/>
    )
}

export default ImageCarousel