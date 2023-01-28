import axios from 'axios';

export const staffModule = {
    state: () => ({
        staff: [],
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        limit: 6,
        totalPages: 0,
        sortOptions: [
            { value: 'name', name: 'По имени' },
            { value: 'username', name: 'По никнейму' },
            { value: 'phone', name: 'По номеру телефона' },
            { value: 'email', name: 'По e-mail' },
            { value: 'website', name: 'По веб-сайту' },
        ],
        userStatus: false,
        selectedStaff: [],
    }),
    getters: {
        sortedStaff(state: any) {
            return [...state.staff].sort((employee1, employee2) => employee1[state.selectedSort]?.localeCompare(employee2[state.selectedSort]))
        },
        sortedAndSearchedStaff(state: any, getters: any) {
            return getters.sortedStaff.filter((employee: any) =>
                employee.name.toLowerCase().includes(state.searchQuery.toLowerCase())
                || employee.email.toLowerCase().includes(state.searchQuery.toLowerCase())
                || employee.phone.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations: {
        setStaff(state: any, staff: any) {
            state.staff = staff;
        },
        setLoading(state: any, bool: boolean) {
            state.isPostsLoading = bool
        },
        setPage(state: any, page: number) {
            state.page = page
        },
        setSelectedSort(state: any, selectedSort: string) {
            state.selectedSort = selectedSort
        },
        setTotalPages(state: any, totalPages: number) {
            state.totalPages = totalPages
        },
        setSearchQuery(state: any, searchQuery: string) {
            state.searchQuery = searchQuery
        },
        setUserStatus(state: any, userStatus: boolean) {
            state.userStatus = !userStatus;
        },
        setSelectedStaff(state: any, selectedStaff: any) {
            state.selectedStaff = selectedStaff;
        }
    },
    actions: {
        async fetchPosts({ state, commit }: any) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] as any / state.limit))
                commit('setStaff', response.data)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false);
            }
        },
        async loadMorePosts({ state, commit }: any) {
            try {
                commit('setPage', state.page + 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] as any / state.limit))
                commit('setStaff', [...state.staff, ...response.data]);
            } catch (e) {
                console.log(e)
            }
        }
    },
    namespaced: true
}