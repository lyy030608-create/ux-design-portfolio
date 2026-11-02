import {useState} from 'react';
const works=[
{type:'界面探索',title:'青柠 LIME · 青少年表达空间',desc:'小组概念项目：围绕青少年的情绪表达，探索匿名树洞、内容回应与咨询入口，并以网页与立体原型呈现方案。项目为设计探索，不代表已上线心理咨询服务。',images:['undergrad-ui-home','undergrad-ui-mood','undergrad-ui-food']},
{type:'字体与海报',title:'字母形态探索',desc:'以弯曲笔画和尖角收笔建立统一的绿色字母语言，探索字形的节奏与辨识度。',images:['letter-design']},
{type:'字体与海报',title:'Virtual and Actual',desc:'用立体字形、水面倒影与蓝绿色肌理表达虚实关系，组织标题、主题与活动信息的视觉层级。',images:['type-poster']},
{type:'信息与图标',title:'日常生活的信息可视化',desc:'以校园早餐、日常作息与入学流程为主题，用插图、路径和分组整理生活信息。',images:['campus-breakfast','daily-routine','college-process','family-map']},
{type:'信息与图标',title:'公共设施图标系统',desc:'以统一的人物比例与几何笔画表达公共设施、无障碍与行为提示，探索系统内的一致性与色彩变体。',images:['icons','icons-mono']},
{type:'书籍与版式',title:'Art Appreciation',desc:'围绕八种艺术风格组织杂志内容，通过封面、图文组合与跨页编排建立阅读节奏。',images:['magazine-0','magazine-3','magazine-6']},
{type:'书籍与版式',title:'History of Graphic Design',desc:'以平面设计历史为内容进行书籍编排，探索标题层级、图像资料与正文的关系。',images:['book-0','book-3','book-6']},
{type:'书籍与版式',title:'武汉建筑研究 · 桥梁',desc:'小组书籍排版作品，以桥梁影像与文字资料呈现武汉建筑主题。这里展示作品版面，不将小组成果描述为独立完成。',images:['group-book-0','group-book-3','group-book-6']},
{type:'IP 与包装',title:'茶小叶 · 茶文化 IP',desc:'结合汉服、茶叶与绿色配色，塑造亲切的茶文化角色，并探索不同视角与视觉延展。',images:['tea-character','tea-side','tea-back','tea-poster']},
{type:'IP 与包装',title:'文化交融的包装探索',desc:'将文化纹样与包装形式结合，探索图形、色彩和产品呈现之间的关系。',images:['packaging']},

];
export function VisualGallery({onZoom}:{onZoom:(src:string,alt:string)=>void}){const[category,setCategory]=useState('全部');return <><div className="visual-filters" role="group" aria-label="本科作品分类">{['全部',...new Set(works.map(w=>w.type))].map(c=><button key={c} aria-pressed={c===category} onClick={()=>setCategory(c)}>{c}</button>)}</div><div className="visual-project-grid">{works.filter(w=>category==='全部'||w.type===category).map(w=><article key={w.title}><button className="visual-cover" aria-label={'放大：'+w.title} onClick={()=>onZoom('/ux-design-portfolio/media/'+w.images[0]+'.webp',w.title)}><img loading="lazy" src={'/ux-design-portfolio/media/'+w.images[0]+'.webp'} alt={w.title}/></button><span className="eyebrow">{w.type}</span><h3>{w.title}</h3><p>{w.desc}</p>{w.images.length>1&&<div className="visual-thumbs">{w.images.map((n,i)=><button key={n} onClick={()=>onZoom('/ux-design-portfolio/media/'+n+'.webp',w.title+' · '+(i+1))} aria-label={'查看'+w.title+'第'+(i+1)+'张'}><img loading="lazy" src={'/ux-design-portfolio/media/'+n+'.webp'} alt={w.title+' · '+(i+1)}/></button>)}</div>}</article>)}</div></>}
