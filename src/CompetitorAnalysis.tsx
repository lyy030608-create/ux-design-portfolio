const media='/ux-design-portfolio/media/';
export function DriftCompetitors(){return <section className="competitor-study"><span className="eyebrow">V1 前期调研</span><h4>竞品分析</h4><div className="benchmark-grid"><article><h5 className="brand-heading"><img src={media+'wechat-logo.svg'} alt="微信 logo"/>微信漂流瓶</h5><p>扔瓶子、捡瓶子，读完可以回复或放回。</p><p><strong>设计参考：</strong>首页分为“写消息”和“读消息”，让用户直接选择。</p></article><article><h5 className="brand-heading"><span className="bottled-wordmark" aria-label="Bottled 品牌名称">Bottled</span>Bottled</h5><p>写信随机送达，接收者可以留下或放走瓶子。</p><p><strong>设计参考：</strong>读完不必回复，可以继续浏览或结束。</p></article></div><div className="decision-map"><h5>V1 采用的交互</h5><ol><li><strong>写消息 / 读消息</strong><span>两个入口，分别进入写作和浏览。</span></li><li><strong>上划投瓶</strong><span>用瓶子飞出和入水的动画确认发送。</span></li><li><strong>自选是否回应</strong><span>阅读后可以打招呼、继续浏览或退出。</span></li></ol></div></section>}
const products=[
['Spotify','推荐、歌单与播放队列。','推荐适合听，不一定适合唱。','分开“保存候选”和“公开入队”。'],
['Apple Music','曲库、歌词与跟唱。','曲库丰富，但仍需缩小选择。','优先提示熟悉度和音域难度。'],
['Smule','独唱、合唱与演唱分享。','表演与分享可能增加参与压力。','允许先私下准备，再决定参与方式。'],
['全民 K 歌','搜歌、伴奏、合唱与房间互动。','功能较多，小屏选歌容易分心。','手表负责个人预选，平板管理房间队列。']
];
export function KaraokeCompetitors(){return <section className="competitor-study"><span className="eyebrow">前期调研</span><h4>选歌产品对比</h4><div className="benchmark-grid">{products.map(([name,reference,gap,decision])=><article key={name}><h5>{name}</h5><p>{reference}{gap}</p><p><strong>设计参考：</strong>{decision}</p></article>)}</div></section>}
