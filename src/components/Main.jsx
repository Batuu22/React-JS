//rcc
import React, { Component } from 'react';

//i18next
import { withTranslation } from 'react-i18next';

// Router
import { Link } from 'react-router-dom';

//CLASS
class Main extends Component {
    //Componentteki isim
    static displayName = "Router_Main";

    //constructor
    constructor(props) {
        super(props);

        //STATE
        this.state = {};

        //BIND

    }//end constructor

    //CDM

    //FUNCTION

    //Render
    render() {
        //Return
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-2">
                        <Link className='btn btn-primary' to={'/blog/list'}>Blog_Liste Yönlen</Link>
                    </div>
                    <div className="alert alert-danger alert-dismissible fade show col-10" role="alert">
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        <strong className='text-primary'>Merhabalar</strong>
                        {/* Inline Css */}
                        <span style={{ color: "#f00" }}>Nasılsınız Güzel insanlar</span>
                    </div>
                </div>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam reiciendis a repudiandae rem dolorum non quas? Facilis accusamus hic velit natus esse corrupti eveniet vel? Atque voluptatibus laborum dolor.
                    Dolorum, iure repellendus blanditiis consequatur magnam nam quibusdam odio, beatae ipsum ea quod, sapiente quidem dignissimos veritatis omnis assumenda nesciunt laborum accusamus deserunt temporibus incidunt! Perspiciatis at repellat obcaecati totam?
                    Officiis maiores nihil quas placeat, laborum corporis modi, voluptas quasi eum temporibus inventore iste facilis veritatis harum est voluptatem perferendis quis accusantium magni ad fugiat blanditiis! Quisquam aliquam numquam officia.
                    Corrupti laudantium, vel voluptatibus necessitatibus fugiat fuga sit quaerat debitis iusto perferendis. Molestias asperiores optio in sequi dicta sed, earum est, numquam, eos quidem a! Odio perferendis soluta recusandae in!
                    Libero unde itaque nostrum distinctio, mollitia, animi optio eos repudiandae quaerat ullam similique consequuntur beatae nobis commodi consectetur ducimus quae repellendus porro, praesentium hic modi earum quia delectus odio. Ipsa?
                    Maxime consequatur accusamus enim saepe exercitationem expedita nostrum veniam deserunt totam, quod omnis commodi iste nisi beatae! Modi, ipsam nostrum soluta, suscipit aut nisi maiores itaque dolore fuga, animi provident?
                    Enim, qui facilis unde iste voluptate ea mollitia ex amet nesciunt distinctio accusamus omnis non deleniti voluptas quidem assumenda a explicabo. Quo iste, reiciendis nobis voluptatibus porro quasi voluptas animi?
                    Eum qui eius, eos laboriosam pariatur cupiditate minima quia animi beatae, voluptatibus doloribus rerum dignissimos tempora? Esse impedit voluptates necessitatibus alias, vitae officiis consequatur beatae fuga placeat mollitia, ex iure.
                    Repellat, maxime laboriosam reiciendis animi voluptates expedita laudantium, quis suscipit deleniti autem harum. Labore ipsam, natus porro sunt quidem laudantium nemo veniam aut harum fugit minima ipsum dicta iusto alias.
                    Aliquid doloribus aperiam aspernatur nostrum accusamus iusto architecto laboriosam tempore commodi quos labore est ut, quidem error nisi veniam recusandae autem a cum. Illum eum facere atque corporis voluptates minima?</p>

            </React.Fragment>
        )// end Return
    }// end Render
}// end Class

//Higher Order Component
export default withTranslation()(Main);