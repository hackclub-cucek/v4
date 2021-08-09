let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/program/react/hackclubCucek/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +80 pages/index.js
badd +67 components/seo.js
badd +9 pages/page-2.js
badd +5 styles/Colors.js
badd +6 pages/404.js
badd +36 components/Header.js
badd +113 components/HeaderDesktop.js
badd +8 styles/Global.css
badd +5 components/Utility.js
badd +26 components/mainPage/MainPageContentDesktop.js
badd +31 components/mainPage/MainPageExtras.js
badd +44 components/mainPage/TitleWithRect.js
badd +40 components/mainPage/ThingsWeDo.js
badd +64 components/mainPage/OurInitiatives.js
badd +127 components/mainPage/UpcomingEvents.js
badd +97 components/mainPage/GalleryImages.js
badd +25 components/FooterDesktop.js
badd +7 components/hooks/useDeviceType.js
badd +12 pages/\{MarkdownRemark.frontmatter__slug}.js
badd +1 posts/testPost.md
badd +6 posts/thingsWeDo/Networking.md
badd +5 posts/thingsWeDo/skillEnhancement.md
badd +1 posts/events/doomsday.md
badd +1 posts/events/DBMSlabExam.md
badd +0 posts/events/tinkerhubLFH.md
argglobal
%argdel
edit posts/events/tinkerhubLFH.md
argglobal
balt posts/events/DBMSlabExam.md
let s:l = 10 - ((9 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 10
normal! 04|
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0&& getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
