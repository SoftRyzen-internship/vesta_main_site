'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { clsx } from 'clsx';
import { motion, useAnimate } from 'framer-motion';

import { Logo } from '@/components/ui/Logo';
import { NavList } from '@/components/common/NavList';
import { LinkButton } from '@/components/ui/LinkButton';
import { Button } from '@/components/ui/Button';
import { navListData } from '@/data';
import { BurgerMenu } from '@/components/ui/BurgerMenu';
import { useWindowSize } from '@/utils';

export const Header: FC = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();
  const isDesktop = size.width && size.width > 1279;
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isDesktop) {
      // variants = {
      //   hidden: { opacity: 0 },
      //   visible: { opacity: 1, transition: { duration: 2 } },
      // };
      animate('.animated', { opacity: 1 });
    }
  }, []);

  return (
    <header
      className={clsx(
        'absolute left-0 top-0 w-full py-[20px]',
        pathName === '/' || pathName === '/about' || pathName === '/projects'
          ? 'bg-transparent'
          : 'bg-green',
      )}
    >
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        // initial='hidden'
        // animate='visible'
        // variants={variants}
      > */}
      <div
        ref={scope}
        className='animated container flex items-center justify-between'
      >
        <Logo />
        <div className='hidden xl:block'>
          <NavList navList={navListData} forFooter={false} />
        </div>
        <LinkButton
          href='/contacts'
          variant='contactsHeader'
          className='hidden xl:block'
        >
          Контакти
        </LinkButton>
        <Button
          variant='openMenu'
          onClick={() => setIsOpen(true)}
          className='xl:hidden'
        />
      </div>
      {/* </motion.div> */}

      <BurgerMenu isOpen={isOpen} close={() => setIsOpen(false)} />
    </header>
  );
};

// ('use client');

// import { FC, useState } from 'react';
// import { usePathname } from 'next/navigation';

// import { clsx } from 'clsx';
// import { motion } from 'framer-motion';

// import { Logo } from '@/components/ui/Logo';
// import { NavList } from '@/components/common/NavList';
// import { LinkButton } from '@/components/ui/LinkButton';
// import { Button } from '@/components/ui/Button';
// import { navListData } from '@/data';
// import { BurgerMenu } from '@/components/ui/BurgerMenu';
// import { useWindowSize } from '@/utils';

// export const Header: FC = () => {
//   const pathName = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const size = useWindowSize();
//   const isDesktop = size.width && size.width > 1279;
//   // useEffect(() => {
//   //   if (isDesktop) {
//   //     variants = {
//   //       hidden: { opacity: 0 },
//   //       visible: { opacity: 1, transition: { duration: 2 } },
//   //     };
//   //   }
//   // }, []);

//   return (
//     <header
//       className={clsx(
//         'absolute left-0 top-0 w-full py-[20px]',
//         pathName === '/' || pathName === '/about' || pathName === '/projects'
//           ? 'bg-transparent'
//           : 'bg-green',
//       )}
//     >
//       {isDesktop ? (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 2 }}
//           // initial='hidden'
//           // animate='visible'
//           // variants={variants}
//         >
//           <div className='container flex items-center justify-between'>
//             <Logo />
//             <div className='hidden xl:block'>
//               <NavList navList={navListData} forFooter={false} />
//             </div>
//             <LinkButton
//               href='/contacts'
//               variant='contactsHeader'
//               className='hidden xl:block'
//             >
//               Контакти
//             </LinkButton>
//             <Button
//               variant='openMenu'
//               onClick={() => setIsOpen(true)}
//               className='xl:hidden'
//             />
//           </div>
//         </motion.div>
//       ) : (
//         <div className='container flex items-center justify-between'>
//           <Logo />
//           <div className='hidden xl:block'>
//             <NavList navList={navListData} forFooter={false} />
//           </div>
//           <LinkButton
//             href='/contacts'
//             variant='contactsHeader'
//             className='hidden xl:block'
//           >
//             Контакти
//           </LinkButton>
//           <Button
//             variant='openMenu'
//             onClick={() => setIsOpen(true)}
//             className='xl:hidden'
//           />
//         </div>
//       )}

//       <BurgerMenu isOpen={isOpen} close={() => setIsOpen(false)} />
//     </header>
//   );
// };
