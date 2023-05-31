import Image from 'next/image';
import { Box } from '@chakra-ui/react';

import HorizontalScroll from 'react-scroll-horizontal'



export default function ImageSrollbar({ data }) {
  const child   = { width: `35em`, height: `100%`, borderLeft: `1px solid gray`}

  return (
    <Box width='100%' overflow='hidden' p='1' height='350px' >
      <HorizontalScroll style={{overflow: 'hidden'}}>
        {
          data.map(item =>  (
            <div style={child} key={item.id} >
              <Image 
                placeholder="blur" 
                blurDataURL={item.url} src={item.url}
                width={1000} height={500}  
                sizes="(max-width: 500px) 100px, (max-width):1023px 400px, 1000px" 
                alt='property'
              />              
            </div>
          ))
        }
      </HorizontalScroll>
    </Box>
  );
}
