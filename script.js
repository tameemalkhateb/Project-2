document.addEventListener('DOMContentLoaded', function() {
    // القائمة المتحركة للهواتف
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // بيانات قائمة الطعام
    const menuItems = [
        {
            id: 1,
            title: "سلطة يونانية",
            price: "25 ر.س",
            description: "خضار طازجة مع جبنة فيتا وزيتون",
            category: "starters",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "برياني لحم",
            price: "45 ر.س",
            description: "أرز برياني مع لحم ضأن وتوابل مميزة",
            category: "main",
            image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "كنافة",
            price: "30 ر.س",
            description: "كنافة محشوة بالقشطة ومغطاة بالقطر",
            category: "desserts",
            image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "عصير ليمون بالنعناع",
            price: "15 ر.س",
            description: "عصير ليمون طازج مع أوراق النعناع",
            category: "drinks",
            image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "شوربة عدس",
            price: "20 ر.س",
            description: "شوربة عدس مع خبز محمص",
            category: "starters",
            image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "ستيك لحم",
            price: "65 ر.س",
            description: "ستيك لحم مشوي مع صلصة الفطر والبطاطس",
            category: "main",
            image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 7,
            title: "مهلبية",
            price: "25 ر.س",
            description: "مهلبية بالقرفة والمكسرات",
            category: "desserts",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 8,
            title: "قهوة عربية",
            price: "12 ر.س",
            description: "قهوة عربية مع هيل",
            category: "drinks",
            image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];
    
    // عرض عناصر القائمة
    const menuContainer = document.querySelector('.menu-items');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    function displayMenuItems(category = 'all') {
        menuContainer.innerHTML = '';
        
        const filteredItems = category === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === category);
        
        filteredItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.setAttribute('data-category', item.category);
            
            menuItem.innerHTML = `
                <div class="menu-item-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="menu-item-content">
                    <div class="menu-item-title">
                        <h3>${item.title}</h3>
                        <span>${item.price}</span>
                    </div>
                    <p>${item.description}</p>
                </div>
            `;
            
            menuContainer.appendChild(menuItem);
        });
    }
    
    // تصفية القائمة حسب التصنيف
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            displayMenuItems(category);
        });
    });
    
    // عرض جميع العناصر عند التحميل
    displayMenuItems();
    
    // نموذج الحجز
    const reservationForm = document.getElementById('reservation-form');
    
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        
        // هنا يمكنك إضافة كود لإرسال البيانات إلى الخادم
        alert(`شكراً ${name}، تم استلام حجزك لـ ${guests} أشخاص في ${date} الساعة ${time}. سنتصل بك على ${phone} للتأكيد.`);
        
        reservationForm.reset();
    });
    
    // إضافة تأثير التمرير السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // إضافة تأثير التمرير للشريط العلوي
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            document.querySelector('header').style.background = 'rgba(255, 255, 255, 0.95)';
            document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            document.querySelector('header').style.background = 'white';
            document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});
