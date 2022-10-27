import React from 'react'
import CoachCanada from '../../assets/images/coach-canada-footer-logo.png'
import MegaBus from '../../assets/images/megabus-footer-logo.png'

const index = () => {
  return (
    <>
    <footer className="footer-2 bg-gray-800 pt-6 md:pt-12 WCC:absolute WCC:bottom-0 WCC:left-0 WCC:w-full print:hidden">
        <div className=" container px-4 mx-auto">
          <div className="md:flex md:mx-4 md:pb-12">
            <div className="w-3/4 md:w-1/3 md:px-4 ">
              <h4 className="text-white md:text-2xl mb-4">
                DOWNLOAD THE APP NOW! TO ENJOY ITS FEATURES
              </h4>
              <div>
                <button
                  type="button"
                  className="disabled:cursor-default block mb-8 mr-8 md:mb-0 md:mr-0"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Download_on_the_App_Store_Badge_US-UK_RGB_wht.svg/2560px-Download_on_the_App_Store_Badge_US-UK_RGB_wht.svg.png"
                    alt="APPLE"
                    className="rounded-lg my-4 mx-md:hidden"
                    width="42%"
                  />
                </button>
                <button
                  type="button"
                  className="disabled:cursor-default block mb-8 mr-8 md:mb-0 md:mr-0"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBXANQUV9Eh3gPBgN821tMCrRIPwMMjZ9hNaRtrHEJqsmuqxzDIioehaHgLXyPxNtLzw&usqp=CAU"
                    alt="GOOGLE"
                    className="rounded-lg"
                    width="42%"
                  />
                </button>
              </div>
            </div>
            <div className="w-2/3 md:px-4 md:pl-16 md:mt-0">
              <div className="md:flex">
                <div className="md:flex-1 mt-4 md:mt-0">
                  <h6 className=" text-base font-medium text-white uppercase mb-2">
                    Company
                  </h6>
                  <hr className="max-w-[15%]" />
                  <div>
                    <a href="" className="text-gray-400 py-1 block hover:underline">
                      About Coach USA
                    </a>
                    <a href="" className="text-gray-400 py-1 block hover:underline">
                      News & Media
                    </a>
                    <a href="" className="text-gray-400 py-1 block hover:underline">
                      Service Advisories
                    </a>
                    <a href="" className="text-gray-400 py-1 block hover:underline">
                      Professional Services
                    </a>
                    <a href="" className="text-gray-400 py-1 block hover:underline">
                      Employment
                    </a>
                  </div>
                </div>
                <div className="md:flex-1 mt-4 md:mt-0">
                  <h6 className=" text-base font-medium text-white uppercase mb-2">
                    My Account
                  </h6>
                  <hr className="max-w-[15%]" />
                  <a href="" className="text-gray-400 py-1 block hover:underline">
                    My Account
                  </a>
                  <a href="" className="text-gray-400 py-1 block hover:underline">
                    My Tickets
                  </a>
                  <a href="" className="text-gray-400 py-1 block hover:underline">
                    My Payment Methods
                  </a>
                  <a href="" className="text-gray-400 py-1 block hover:underline">
                    My Alerts
                  </a>
                </div>
                <div className="md:flex-1 mt-4 md:mt-0">
                  <h6 className=" text-base font-medium text-white uppercase mb-2">
                    Customer Service
                  </h6>
                  <hr className="max-w-[15%]" />
                  <a href="" className="text-gray-400 py-1 block hover:underline">
                    Site Policies
                  </a>
                  <a href="" className="text-gray-400 py-1 block hover:underline">
                    FAQS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t border-solid border-gray-900 bg-blue-100 mt-4 py-4 text-black WCC:hidden">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:-mx-4 md:items-center">
              <div className="md:flex-1 md:px-9 text-left">
                <a href="">
                  <img
                    src={CoachCanada}
                    alt="Coach Canada"
                    className="py-2 px-4 inline-block"
                    width="30%"
                  />
                </a>
                <a href="">
                  <img
                    src={MegaBus}
                    alt="MegaBus"
                    className=" pt-6 py-2 px-4 inline-block float-right"
                    width="30%"
                  />
                </a>
              </div>
              <div className="md:flex-1 md:px-4 text-cyan-700 text-astral mx-md:pt-2 md:text-right mx-md:text-center">
                © <strong> 2022 Coach USA</strong>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default index
