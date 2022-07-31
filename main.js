const active = document.querySelector('.ham-menu')
const close = document.querySelector('.link')
const menu = document.querySelector('.menu-cn')

active.addEventListener('click', () => {
    menu.style.display = 'flex';
    active.style.display = 'none';
})

close.addEventListener('click', () => {
    menu.style.display = 'none';
    active.style.display = 'block'
})

// -----------TEMPLATE LITTERALS-----------//

const thirdpage = document.querySelector('#thirdpage');
const featuredTeachers = document.querySelector('.thirdpage');
featuredTeachers.innerHTML = ` <div class="second-heading">
<h2>Featured Teachers</h2>
<div class="underline"></div>
</div>
<div class="featured-cards">
<div class="cv">
    <div class="parent">
        <img src="images/YochaiBenklerJI6.jpg" class="main-img" alt="Yochai's image">
    </div>
    <div class="descriptions">
        <h3>Yochai Benkler</h3>
        <a href="">Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</a>
        <div class="underline1"></div>
        <p>Benkler studies commons-based peer production, and published his seminal book the Wealth of
            Networks in 2006.</p>
    </div>
</div>
<div class="cv">
    <div class="parent">
        <img src="images/SohYeong.jpg" class="main-img" alt="Yochai's image">
    </div>
    <div class="descriptions">
        <h3>SohYeong Noh</h3>
        <a href="">Director of Art centre Nabi and a board member of CC Korea</a>
        <div class="underline1"></div>
        <p>Nabi promores cross-disciplinary
            collaboration and understanding among science technology, humanities, and the arts</p>
    </div>
</div>
<div class="cv">
    <div class="parent">
        <img src="images/Lila.png" class="main-img" alt="Yochai's image">
    </div>
    <div class="descriptions">
        <h3>Lila Tretikov</h3>
        <a href="">Executive Director of the Wikimedia Foundation</a>
        <div class="underline1"></div>
        <p>Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion poeple around the world every month</p>
    </div>
</div>
<div class="cv">
    <div class="parent">
        <img src="images/kilnam.png" class="main-img" alt="Yochai's image">
    </div>
    <div class="descriptions">
        <h3>Kilnam Chon</h3>
        <div class="underline1"></div>
        <p>Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons in 2012, he was inducted into inaugural class of the Internet Society's (ISOC) Internet Hall of Fame</p>
    </div>
</div>

</div>`
thirdpage.appendChild(featuredTeachers);
