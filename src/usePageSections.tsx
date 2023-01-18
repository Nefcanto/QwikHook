import { useLocation } from '@builder.io/qwik-city'

const usePageSections = () => {

	const { query } = useLocation()
	
	// getting data from somewhere
	return {
		name: 'John',
		age: 42
	}
}

export default usePageSections
