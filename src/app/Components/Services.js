

import dbConnect from "@/lib/dbConnect";
import Image from "next/image";

async function Services() {
    const serviceCollection = dbConnect("text");
    const data = await serviceCollection.find({}).toArray();
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 my-10">
            { data.map((service) => (
            <div key={service._id} className="card card-compact bg-base-100 shadow-xl">
                <figure>
                    <Image
                        className="p-6"
                        src={service.img}
                        width={500}
                        height={500}
                        alt={service.title}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.description}</p>
                    <p>${service.price}</p>

                </div>
            </div>
            ))
           }
        </div>
    );
}

export default Services;
