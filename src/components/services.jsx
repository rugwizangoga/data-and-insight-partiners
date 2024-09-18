import React from 'react';
import { FaChartBar, FaDatabase, FaProjectDiagram, FaTools, FaNetworkWired, FaUserShield, FaLightbulb } from 'react-icons/fa';

function Services() {
  const services = [
    {
      title: "Business Intelligence",
      description: "We dive deep into your data, extracting valuable insights and presenting them in a way that empowers you to make informed decisions.",
      icon: <FaChartBar className="text-6xl text-orange-900" />,
      
    },
    {
      title: "Data Analytics and Visualization",
      description: "Transform data into actionable insights with our expert analytics and intuitive visualizations. Predict customer behavior, optimize processes, and uncover hidden patterns.",
      icon: <FaDatabase className="text-6xl text-orange-900" />,
      
    },
    {
      title: "Data Strategy",
      description: "Let us be your guide in developing a data strategy that aligns with your business goals. From setting objectives to implementing governance policies, we ensure that your data works for you.",
      icon: <FaProjectDiagram className="text-6xl text-orange-900" />,
      
    },
    {
      title: "Building Data-driven Tools",
      description: "We turn insights into actionable solutions that drive real value for your business. Develop predictive models or build interactive dashboards to stay ahead of the curve.",
      icon: <FaTools className="text-6xl text-orange-900" />,
      
    },
    {
      title: "Data Integration",
      description: "Seamlessly integrate data from various sources into a unified system to ensure consistency and reliability across your organization.",
      icon: <FaNetworkWired className="text-6xl text-orange-900" />,
      
    },
    {
      title: "Customer and Market Insights",
      description: "Analyze customer data to uncover insights that can improve customer experiences, loyalty, and lifetime value. Gain a deeper understanding of market trends and competitive dynamics.",
      icon: <FaLightbulb className="text-6xl text-orange-900" />,
      
    },
    {
      title: "Data Protection and Compliance",
      description: "We offer comprehensive Data Protection and Compliance services to safeguard your valuable data assets, including encryption, access controls, and regular audits.",
      icon: <FaUserShield className="text-6xl text-orange-900" />,
      
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl P-7 font-bold">What <span className='text-orange-800'>We Do</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-lg flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-white"
          >
                <div className='p-6'>
                    <div>
                        {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
