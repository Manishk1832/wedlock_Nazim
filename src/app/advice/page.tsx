import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="pt-[83.5px] font-lato ">
      <div className=" px-4  sm:px-20 py-[80px]">
        <div className="py-16 space-y-8 xl:px-6 2xl:px-28 advice_heading">
          <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]" style={{fontFamily: 'Proxima-Nova-regular'}}>Matrimonial advice</h1>
          <p className="text-[#42526B] w-[24rem] sm:w-[40rem] leading-[26px] text-[18px]" style={{fontFamily: 'Proxima-Nova-Regular'}}>
            Cras imperdiet est eget nulla fringilla, sit amet volutpat sem
            tristique. Pellentesque quis augue ac mauris posuere vehicula.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 xl:px-6 2xl:px-28 man_cardBox">

          <div className="rounded border-2  border-[#E6E8EC] hover:border-none hover:rounded-3xl hover:shadow-2xl px-4 space-y-[8px] man_card">
            <Image src="/ProjectPh.svg" width={650} height={400}  alt=""  className="xl:w-[100%]"/>
            <h1 className="text-[#061C3D] text-[24px] leading-[32px] font-normal" style={{fontFamily: 'Proxima-Nova-Regular'}}>Horoscope information </h1>
            <div className="text-[#007EAF] underline pb-3">
              <h1>Read More →</h1>
            </div>
          </div>
          <div className="rounded border-2 gap-64 border-[#E6E8EC] hover:border-none hover:rounded-3xl hover:shadow-2xl px-4 space-y-[8px] man_card2">
            <Image src="/ProjectPh.svg" width={650} height={400} alt="" className="xl:w-[100%]" />
            <h1 className="text-[#061C3D] text-2xl">Horoscope information </h1>
            <div className="text-[#007EAF] underline pb-3">
              <h1>Read More →</h1>
            </div>
          </div>
          <div className="rounded border-2 mt-[72px] border-[#E6E8EC] hover:border-none hover:rounded-3xl hover:shadow-2xl px-4 space-y-[8px] man_card">
            <Image src="/ProjectPh.svg" width={650} height={400} alt="" className="xl:w-[100%]"/>
            <h1 className="text-[#061C3D] text-2xl">Horoscope information </h1>
            <div className="text-[#007EAF] underline pb-3">
              <h1>Read More →</h1>
            </div>
          </div>
          <div className="rounded border-2 mt-[72px] border-[#E6E8EC] hover:border-none hover:rounded-3xl hover:shadow-2xl px-4 space-y-[8px] man_card">
            <Image src="/ProjectPh.svg" width={650} height={400} alt="" className="xl:w-[100%]"/>
            <h1 className="text-[#061C3D] text-2xl">Horoscope information </h1>
            <div className="text-[#007EAF] underline pb-3">
              <h1>Read More →</h1>
            </div>
          </div>
          <div className="rounded border-2 mt-[72px] border-[#E6E8EC] hover:border-none hover:rounded-3xl hover:shadow-2xl px-4 space-y-[8px] man_card">
            <Image src="/ProjectPh.svg" width={650} height={400} alt="" className="xl:w-[100%]"/>
            <h1 className="text-[#061C3D] text-2xl">Horoscope information </h1>
            <div className="text-[#007EAF] underline pb-3">
              <h1>Read More →</h1>
            </div>
          </div>
          <div className="rounded border-2 mt-[72px] border-[#E6E8EC] hover:border-none hover:rounded-3xl hover:shadow-2xl px-4 space-y-[8px] man_card">
            <Image src="/ProjectPh.svg" width={650} height={400} alt="" className="xl:w-[100%]"/>
            <h1 className="text-[#061C3D] text-2xl">Horoscope information </h1>
            <div className="text-[#007EAF] underline pb-3 text-[16px]">
              <h1 >Read More →</h1>
            </div>
          </div>
        </div>
      </div>
      {/* attration */}

      <div className="bg-[#F5F6F7]   lg:px-20 py-[124px]">
        <div className="text-center space-y-10 at">
          <h1 className="text-[56px] font-bold leading-[60px] tracking-[-2%]" style={{fontFamily: 'Proxima-Nova-regular'}}>Attraction</h1>
          <p className="text-[18px] leading-[26px] text-[#42526B] font-normal" style={{fontFamily: 'Proxima-Nova-regular'}}>
            Cras imperdiet est eget nulla fringilla, sit amet volutpat sem
            tristique. Pellentesque <br />quis augue ac mauris posuere vehicula.
          </p>
        </div>
        <div className="grid grid-cols-3   px-[18px]  attraction_box">
          <div className="rounded  px-2 space-y-8 w-[380.6px] h-[596px] at_img">
            <Image src="/ProjectPh.svg" width={650} height={400} alt="" className="w-[380px] h-[464px] "/>
            <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
            <div className="text-[#007EAF] underline pb-3">
              <h1>Read More →</h1>
            </div>
          </div>
          <div className="rounded  px-2 space-y-8 w-[380.6px] h-[596px] ">
            <Image src="/ProjectPh.svg" width={650} height={400} alt="" className="w-[380px] h-[464px]"/>
            <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
            <div className="text-[#007EAF] underline pb-3">
              <h1>Read More →</h1>
            </div>
          </div>
          <div className="rounded  px-2 space-y-8 w-[380.6px] h-[596px] ">
            <Image src="/ProjectPh.svg" width={650} height={400} alt="" className="w-[380px] h-[464px]"/>
            <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
            <div className="text-[#007EAF] underline pb-3">
              <h1>Read More →</h1>
            </div>
          </div>
        </div>
      </div>

      {/* attration end */}

      {/* finding */}
      <div className="py-[80px]   px-[2.5rem] att_container">
        <div className="py-16 space-y-8 px-[4.5rem] att_title">
          <h1 className="text-[56px] font-bold leading-[60px] tracking-[2%]" style={{fontFamily: 'Proxima-Nova-regular'}}>Finding yourself</h1>
          <p className="text-[#42526B] text-[18px] leading-[26px]" style={{fontFamily: 'Proxima-Nova-regular'}}>
            Cras imperdiet est eget nulla fringilla, sit amet volutpat sem
            tristique. Pellentesque quis augue ac mauris posuere vehicula.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 px-[4.5rem] at_card">
          <div className="rounded border-2 border-[#E6E8EC] hover:border-none hover:rounded-3xl hover:shadow-2xl px-4 space-y-8">
            <Image src="/ProjectPh.svg" width={650} height={400} alt="" className="xl:w-[100%]"/>
            <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
            <div className="text-[#007EAF] underline pb-3">
              <h1>Read More →</h1>
            </div>
          </div>
          <div className="rounded border-2 border-[#E6E8EC] hover:border-none hover:rounded-3xl hover:shadow-2xl px-4 space-y-8">
            <Image src="/ProjectPh.svg" width={650} height={400} alt="" className="xl:w-[100%]"/>
            <h1 className="text-[#061C3D] text-1xl sm:text-2xl">Horoscope information </h1>
            <div className="text-[#007EAF] underline pb-3">
              <h1>Read More →</h1>
            </div>
          </div>
        
        
        </div>
      </div>

      


      {/* finding end */}
    </div>
  );
}

export default page;
