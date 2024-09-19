import { useModal } from '@/context/ModalContext'
import React from 'react'
import Popup from '../Popup'
import AnimatedTitle from '../motion/AnimatedTitle'
import BasicButton from '../buttons/BasicButton'
import Icon from '../logos/Icon'
import ViewMotionWrapper from '../ViewMotionWrapper'
import Image from 'next/image'

const FormSuccessModal = () => {
  const { isOpen, types, handleModalClose } = useModal()

  const isModalOpen = isOpen && types.includes('success')

  console.log(isModalOpen)
  return (
    <Popup isOpen = {isModalOpen} opacity={80} fade>
      <ViewMotionWrapper className='lg:w-[800px] md:mx-8 mx-4 py-16 px-8 bg-white rounded-xl flex flex-col text-center items-center lg:gap-4 gap-2 relative'>
        <AnimatedTitle text='Your message has been sent!' className='font-heading lg:text-[38px] lg:leadig-[45px] leading-[35px] text-[28px] font-bold xl:text-center w-full xl:justify-center lg:mb-0 sm:mb-0'/>
        <Image src = '/support-blue.png' height={60} width={40} className='' alt = 'Hands & heart' />

        <div className='lg:w-[70%] bodyText'>
          Thank you for getting in touch with us! We have recieved your message and will get back to you shortly.
        </div>

        <div className='lg:mt-2 mt-6'>
          <BasicButton text='Okay' bgColor='black' color='white' handleClick={() => handleModalClose('success')}/>
        </div>

      <Icon
        path={{ src: "/baobab-sml.png" }}
        className="lg:block lg:h-[235px] lg:w-[105px] h-[150px] w-[80px] absolute z-10 start-0 bottom-[10px]"
      />

      <div
        style={{ transform: "rotateY(180deg)" }}
        className="lg:block right-0 absolute z-10 bottom-[10px]"
      >
        <Icon
          path={{ src: "/baobab-sml.png" }}
          className="lg:block lg:h-[235px] lg:w-[105px] h-[150px] w-[80px]"
        />
      </div>
      </ViewMotionWrapper>

    </Popup>
  )
}

export default FormSuccessModal