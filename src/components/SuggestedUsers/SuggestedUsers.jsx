import {VStack, Flex, Text, Box, Link} from '@chakra-ui/react';
import SuggestedUser from './SuggestedUser';
import SuggestedHeader from './SuggestedHeader';

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
            Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={'bold'} _hover={{color: 'gray.400'}}    cursor={'pointer'}>
            See all
        </Text>
      </Flex>
        <SuggestedUser name='John Wick' followers={1549} avatar='https://bit.ly/dan-abramov'/>
        <SuggestedUser name='Shaktiman' followers={665} avatar='https://bit.ly/ryan-florence'/>
        <SuggestedUser name='Gangadhar' followers={892} avatar='https://bit.ly/code-beast'/>

        <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
            &copy; 2024 Built By {' '}
            <Link href='https://www.github.com/AmolDhawle' target='_blank' color='blue.500' fontSize={14}>
                Amol Dhawle
            </Link>
        </Box>
    </VStack>
  );
};

export default SuggestedUsers;
