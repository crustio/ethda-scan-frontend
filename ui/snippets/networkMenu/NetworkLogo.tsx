import { Box, Image } from '@chakra-ui/react';
import React from 'react';

import { route } from 'nextjs-routes';

import config from 'configs/app';

interface Props {
  isCollapsed?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
}

// const LogoFallback = ({
//   isCollapsed,
//   isSmall,
// }: {
//   isCollapsed?: boolean;
//   isSmall?: boolean;
// }) => {
//   const field = isSmall ? 'icon' : 'logo';
//   const { colorMode } = useColorMode();

//   const display = isSmall ?
//     {
//       base: 'none',
//       lg: isCollapsed === false ? 'none' : 'block',
//       xl: isCollapsed ? 'block' : 'none',
//     } :
//     {
//       base: 'block',
//       lg: isCollapsed === false ? 'block' : 'none',
//       xl: isCollapsed ? 'none' : 'block',
//     };

//   if (config.UI.sidebar[field].default) {
//     return <Skeleton w="100%" borderRadius="sm" display={ display }/>;
//   }

//   return (
//     /* eslint-disable*/
//     isSmall ? <img src="./zk-logo.jpg"></img> : <img src="./zk-logo.jpg"></img>
//   );
// };

const NetworkLogo = ({ isCollapsed, onClick }: Props) => {
  return (
    <Box
      as="a"
      href={ route({ pathname: '/' }) }
      width={{
        base: '120px',
        lg: isCollapsed === false ? '120px' : '30px',
        xl: isCollapsed ? '30px' : '120px',
      }}
      height={{
        base: '50px',
        lg: isCollapsed === false ? '50px' : '30px',
        xl: isCollapsed ? '30px' : '50px',
      }}
      display="inline-flex"
      overflow="hidden"
      onClick={ onClick }
      flexShrink={ 0 }
      aria-label="Link to main page"
    >
      { /* big logo */ }
      <Image
        w="auto"
        h="100%"
        // src={logoSrc}
        alt={ `${ config.chain.name } network logo` }
        fallback={ <img src="./zk-logo.jpg"/> }
        // display={{
        //   base: "block",
        //   lg: isCollapsed === false ? "block" : "none",
        //   xl: isCollapsed ? "none" : "block",
        // }}
        // style={logoStyle}
      />
      { /* small logo */ }
    </Box>
  );
};

export default React.memo(NetworkLogo);
