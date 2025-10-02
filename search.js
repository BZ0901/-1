// 房产搜索功能实现
(function() {
    // 等待DOM加载完成
    document.addEventListener('DOMContentLoaded', function() {
        // 获取搜索相关元素
        const searchSection = document.getElementById('search');
        const searchInput = searchSection ? searchSection.querySelector('input[type="text"]') : null;
        const searchResultsContainer = searchSection ? searchSection.querySelector('div.grid.grid-cols-1.gap-6') : null;
        
        // 自定义函数查找包含特定文本的按钮
        function findButtonWithText(text) {
            if (!searchSection) return null;
            const buttons = searchSection.querySelectorAll('button');
            for (const button of buttons) {
                if (button.textContent.includes(text)) {
                    return button;
                }
            }
            return null;
        }
        
        const nearbyBtn = findButtonWithText("附近房源");
        const priceDropBtn = findButtonWithText("降价房源");
        const newListingBtn = findButtonWithText("新上房源");
        const filterBtn = findButtonWithText("更多筛选");
        
        // 模拟API请求函数
        function searchProperties(keyword, page = 1, filters = {}) {
            // 模拟网络延迟
            return new Promise((resolve) => {
                setTimeout(() => {
                    // 模拟API返回的数据
                    const mockResults = generateMockResults(keyword, page, filters);
                    resolve(mockResults);
                }, 500);
            });
        }
        
        // 生成模拟搜索结果
        function generateMockResults(keyword, page, filters) {
            // 基础房源数据
            const baseProperties = [
                {
                    id: 1,
                    title: "曲江明珠 3室2厅",
                    address: "西安市雁塔区曲江路88号",
                    subway: "近地铁4号线",
                    area: "132.5㎡",
                    structure: "框架结构",
                    orientation: "南北通透",
                    lighting: "采光率85%",
                    floor: "中楼层/共28层",
                    decoration: "精装",
                    year: "2010年竣工",
                    parking: "有地下车库",
                    subwayDistance: "距地铁300米",
                    price: 285,
                    unitPrice: 21509,
                    image: "https://picsum.photos/id/1040/600/400",
                    tag: "新上"
                },
                {
                    id: 2,
                    title: "紫薇田园都市 2室1厅",
                    address: "西安市高新区锦业路5号",
                    subway: "近地铁6号线",
                    area: "95.3㎡",
                    structure: "砖混结构",
                    orientation: "南向",
                    lighting: "采光率75%",
                    floor: "高楼层/共18层",
                    decoration: "中装",
                    year: "2005年竣工",
                    parking: "有地面车位",
                    subwayDistance: "距地铁500米",
                    price: 188,
                    unitPrice: 19727,
                    image: "https://picsum.photos/id/164/600/400",
                    tag: "降价"
                },
                {
                    id: 3,
                    title: "白桦林居 4室2厅",
                    address: "西安市未央区凤城八路121号",
                    subway: "近地铁2号线",
                    area: "168.2㎡",
                    structure: "框架结构",
                    orientation: "四向通透",
                    lighting: "采光率90%",
                    floor: "低楼层/共12层",
                    decoration: "精装",
                    year: "2015年竣工",
                    parking: "有地下车库",
                    subwayDistance: "距地铁800米",
                    price: 345,
                    unitPrice: 20511,
                    image: "https://picsum.photos/id/1029/600/400",
                    tag: ""
                },
                {
                    id: 4,
                    title: "绿地世纪城 3室1厅",
                    address: "西安市高新区科技路37号",
                    subway: "近地铁3号线",
                    area: "120.8㎡",
                    structure: "框架结构",
                    orientation: "南北通透",
                    lighting: "采光率80%",
                    floor: "中楼层/共32层",
                    decoration: "精装",
                    year: "2012年竣工",
                    parking: "有地下车库",
                    subwayDistance: "距地铁400米",
                    price: 275,
                    unitPrice: 22765,
                    image: "https://picsum.photos/id/1042/600/400",
                    tag: ""
                },
                {
                    id: 5,
                    title: "阳光100 2室2厅",
                    address: "西安市碑林区友谊东路58号",
                    subway: "近地铁5号线",
                    area: "89.5㎡",
                    structure: "框架结构",
                    orientation: "南向",
                    lighting: "采光率78%",
                    floor: "高楼层/共25层",
                    decoration: "简装",
                    year: "2008年竣工",
                    parking: "有地面车位",
                    subwayDistance: "距地铁600米",
                    price: 175,
                    unitPrice: 19553,
                    image: "https://picsum.photos/id/1045/600/400",
                    tag: ""
                },
                {
                    id: 6,
                    title: "龙湖香醍国际 3室2厅",
                    address: "西安市灞桥区浐灞大道1号",
                    subway: "近地铁1号线",
                    area: "143.2㎡",
                    structure: "框架结构",
                    orientation: "南北通透",
                    lighting: "采光率82%",
                    floor: "低楼层/共18层",
                    decoration: "精装",
                    year: "2013年竣工",
                    parking: "有地下车库",
                    subwayDistance: "距地铁700米",
                    price: 298,
                    unitPrice: 20800,
                    image: "https://picsum.photos/id/1051/600/400",
                    tag: "新上"
                }
            ];
            
            // 根据关键词过滤结果
            let filteredResults = baseProperties;
            if (keyword) {
                const lowerKeyword = keyword.toLowerCase();
                filteredResults = baseProperties.filter(prop => 
                    prop.title.toLowerCase().includes(lowerKeyword) || 
                    prop.address.toLowerCase().includes(lowerKeyword)
                );
            }
            
            // 根据筛选条件过滤
            if (filters.tag === 'priceDrop') {
                filteredResults = filteredResults.filter(prop => prop.tag === '降价');
            } else if (filters.tag === 'new') {
                filteredResults = filteredResults.filter(prop => prop.tag === '新上');
            } else if (filters.tag === 'nearby') {
                // 模拟附近房源，选择ID为1,2,5的房源
                filteredResults = filteredResults.filter(prop => [1, 2, 5].includes(prop.id));
            }
            
            // 分页处理
            const pageSize = 3;
            const startIndex = (page - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const paginatedResults = filteredResults.slice(startIndex, endIndex);
            
            return {
                results: paginatedResults,
                total: filteredResults.length,
                page: page,
                hasMore: endIndex < filteredResults.length
            };
        }
        
        // 渲染搜索结果
        function renderSearchResults(results) {
            if (!searchResultsContainer) return;
            
            // 清空容器
            searchResultsContainer.innerHTML = '';
            
            if (results.results.length === 0) {
                searchResultsContainer.innerHTML = `
                    <div class="text-center py-12 bg-neutral rounded-xl">
                        <i class="fa fa-search text-4xl text-gray-300 mb-4"></i>
                        <p class="text-gray-medium">未找到相关房源</p>
                        <p class="text-gray-light text-sm mt-2">请尝试其他搜索词或筛选条件</p>
                    </div>
                `;
                return;
            }
            
            // 创建房源卡片
            results.results.forEach(property => {
                const propertyCard = document.createElement('div');
                propertyCard.className = 'bg-white rounded-xl border border-gray-100 overflow-hidden shadow-card hover:shadow-elevated transition-all';
                
                const tagClass = property.tag === '新上' ? 'bg-accent' : 
                               property.tag === '降价' ? 'bg-green-500' : '';
                
                propertyCard.innerHTML = `
                    <div class="flex flex-col md:flex-row">
                        <div class="md:w-1/3 relative">
                            <img src="${property.image}" alt="${property.title}内景" class="w-full h-48 md:h-full object-cover">
                            ${property.tag ? `<span class="absolute top-3 left-3 ${tagClass} text-white text-xs py-1 px-2 rounded">${property.tag}</span>` : ''}
                        </div>
                        <div class="md:w-2/3 p-5">
                            <h3 class="font-semibold text-lg mb-1">${property.title}</h3>
                            <p class="text-gray-medium text-sm mb-3">${property.address} | ${property.subway}</p>
                            <div class="grid grid-cols-3 gap-2 mb-3 text-sm">
                                <span>${property.area} | ${property.structure}</span>
                                <span>${property.orientation} | ${property.lighting}</span>
                                <span>${property.floor}</span>
                                <span>${property.decoration} | ${property.year}</span>
                                <span>${property.parking}</span>
                                <span>${property.subwayDistance}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="text-primary font-bold text-xl">${property.price}</span>
                                    <span class="text-gray-medium">万</span>
                                    <span class="text-gray-medium text-sm ml-2">单价${property.unitPrice.toLocaleString()}元/㎡</span>
                                </div>
                                <button class="py-1.5 px-4 bg-primary/10 text-primary rounded-lg text-sm hover:bg-primary/20 transition-colors view-property-btn" data-id="${property.id}">
                                    查看详情
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                
                searchResultsContainer.appendChild(propertyCard);
            });
            
            // 添加加载更多按钮
            if (results.hasMore) {
                const loadMoreContainer = document.createElement('div');
                loadMoreContainer.className = 'text-center py-4';
                loadMoreContainer.innerHTML = `
                    <button class="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors load-more-btn"
                            data-page="${results.page + 1}">
                        加载更多 <i class="fa fa-angle-down ml-1"></i>
                    </button>
                `;
                searchResultsContainer.appendChild(loadMoreContainer);
            }
            
            // 添加查看详情按钮的事件监听
            document.querySelectorAll('.view-property-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const propertyId = this.getAttribute('data-id');
                    viewPropertyDetails(propertyId);
                });
            });
            
            // 添加加载更多按钮的事件监听
            document.querySelector('.load-more-btn')?.addEventListener('click', function() {
                const page = parseInt(this.getAttribute('data-page'));
                const keyword = searchInput?.value || '';
                searchProperties(keyword, page).then(results => {
                    renderMoreResults(results);
                });
            });
        }
        
        // 渲染更多结果（追加到现有结果）
        function renderMoreResults(results) {
            if (!searchResultsContainer) return;
            
            // 移除加载更多按钮
            const loadMoreBtn = document.querySelector('.load-more-btn').parentElement;
            if (loadMoreBtn) {
                loadMoreBtn.remove();
            }
            
            // 追加新的房源卡片
            results.results.forEach(property => {
                const propertyCard = document.createElement('div');
                propertyCard.className = 'bg-white rounded-xl border border-gray-100 overflow-hidden shadow-card hover:shadow-elevated transition-all';
                
                const tagClass = property.tag === '新上' ? 'bg-accent' : 
                               property.tag === '降价' ? 'bg-green-500' : '';
                
                propertyCard.innerHTML = `
                    <div class="flex flex-col md:flex-row">
                        <div class="md:w-1/3 relative">
                            <img src="${property.image}" alt="${property.title}内景" class="w-full h-48 md:h-full object-cover">
                            ${property.tag ? `<span class="absolute top-3 left-3 ${tagClass} text-white text-xs py-1 px-2 rounded">${property.tag}</span>` : ''}
                        </div>
                        <div class="md:w-2/3 p-5">
                            <h3 class="font-semibold text-lg mb-1">${property.title}</h3>
                            <p class="text-gray-medium text-sm mb-3">${property.address} | ${property.subway}</p>
                            <div class="grid grid-cols-3 gap-2 mb-3 text-sm">
                                <span>${property.area} | ${property.structure}</span>
                                <span>${property.orientation} | ${property.lighting}</span>
                                <span>${property.floor}</span>
                                <span>${property.decoration} | ${property.year}</span>
                                <span>${property.parking}</span>
                                <span>${property.subwayDistance}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div>
                                    <span class="text-primary font-bold text-xl">${property.price}</span>
                                    <span class="text-gray-medium">万</span>
                                    <span class="text-gray-medium text-sm ml-2">单价${property.unitPrice.toLocaleString()}元/㎡</span>
                                </div>
                                <button class="py-1.5 px-4 bg-primary/10 text-primary rounded-lg text-sm hover:bg-primary/20 transition-colors view-property-btn" data-id="${property.id}">
                                    查看详情
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                
                searchResultsContainer.appendChild(propertyCard);
            });
            
            // 添加加载更多按钮
            if (results.hasMore) {
                const loadMoreContainer = document.createElement('div');
                loadMoreContainer.className = 'text-center py-4';
                loadMoreContainer.innerHTML = `
                    <button class="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary/5 transition-colors load-more-btn"
                            data-page="${results.page + 1}">
                        加载更多 <i class="fa fa-angle-down ml-1"></i>
                    </button>
                `;
                searchResultsContainer.appendChild(loadMoreContainer);
            }
            
            // 添加查看详情按钮的事件监听
            document.querySelectorAll('.view-property-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const propertyId = this.getAttribute('data-id');
                    viewPropertyDetails(propertyId);
                });
            });
            
            // 添加加载更多按钮的事件监听
            document.querySelector('.load-more-btn')?.addEventListener('click', function() {
                const page = parseInt(this.getAttribute('data-page'));
                const keyword = searchInput?.value || '';
                searchProperties(keyword, page).then(results => {
                    renderMoreResults(results);
                });
            });
        }
        
        // 查看房源详情
        function viewPropertyDetails(propertyId) {
            // 这里可以实现跳转到详情页或显示详情弹窗
            alert(`查看房源ID: ${propertyId}的详细信息`);
            // 实际项目中可以跳转到详情页或显示详情弹窗
        }
        
        // 初始化搜索功能
        if (searchInput) {
            // 添加回车搜索事件
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const keyword = this.value.trim();
                    if (keyword) {
                        searchProperties(keyword).then(results => {
                            renderSearchResults(results);
                        });
                    }
                }
            });
        }
        
        // 添加快捷按钮事件
        if (nearbyBtn) {
            nearbyBtn.addEventListener('click', function() {
                searchProperties('', 1, { tag: 'nearby' }).then(results => {
                    renderSearchResults(results);
                });
            });
        }
        
        if (priceDropBtn) {
            priceDropBtn.addEventListener('click', function() {
                searchProperties('', 1, { tag: 'priceDrop' }).then(results => {
                    renderSearchResults(results);
                });
            });
        }
        
        if (newListingBtn) {
            newListingBtn.addEventListener('click', function() {
                searchProperties('', 1, { tag: 'new' }).then(results => {
                    renderSearchResults(results);
                });
            });
        }
        
        if (filterBtn) {
            filterBtn.addEventListener('click', function() {
                alert('更多筛选功能即将上线');
            });
        }
    });
})();