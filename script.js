// 资源数据（内容已内化，不跳外链）
const resources = [
  {
    title: "TikTok 网络专题",
    desc: "TikTok 网络环境完整指南：节点、IP、专线一文掌握。",
    icon: "🌐",
    content: `
      <h3>出海网络基础认知</h3>
      <p>做 TikTok 出海，跨境网络是必须解决的底层关卡。根据行业数据统计，环境/IP 问题已成为 TikTok 封号与限流的最高发原因，占比超过 60%。</p>
      
      <h3>常见网络问题汇总</h3>
      <p>TikTok 运营中最常遇到的网络问题包括：</p>
      <ul>
        <li>注册/登录过程异常，无法接收验证码</li>
        <li>网页版访问受限，内容加载失败</li>
        <li>直播推流延迟、画面卡顿、音画不同步</li>
        <li>多账号运营时出现账号关联风险</li>
        <li>视频发布后流量异常或被判定为低质</li>
      </ul>
      
      <h3>环境检测机制解析</h3>
      <p>TikTok 的环境检测涵盖四个维度：IP 地址属性、设备指纹特征、浏览器环境参数、以及用户行为模式。这四层检测相互印证，单一维度的伪装很容易被系统识别。</p>
      
      <h3>企业级网络架构建议</h3>
      <p>对于规模化运营团队，建议采用分层网络架构：</p>
      <ul>
        <li>基础层：稳定的海外节点与带宽保障</li>
        <li>隔离层：账号间的网络环境物理隔离</li>
        <li>优化层：针对直播场景的专线加速</li>
        <li>监控层：实时网络质量与风控预警</li>
      </ul>
      
      <p class="wx-tip">💡 需要定制化网络方案？添加微信 <strong>Phylogenies</strong> 获取专业咨询</p>
    `
  },
  {
    title: "TikTok 直播专线搭建",
    desc: "稳定高速直播专线搭建教程，告别延迟与掉线。",
    icon: "📡",
    content: `
      <h3>跨境直播为什么更容易失败</h3>
      <p>国内直播偶尔出现不稳定属于正常现象，但在跨境场景下，这些问题会被放大数倍。跨海路由、节点跳数增加、国际链路拥堵、平台风控评估等，都会对直播稳定性产生结构性影响。</p>
      
      <h3>三层稳定性模型</h3>
      <p>构建可靠的 TikTok 直播网络需要关注三个层面：</p>
      <ul>
        <li><strong>物理层</strong>：骨干网质量、节点地理位置、线路冗余度</li>
        <li><strong>传输层</strong>：协议优化、丢包补偿、抖动缓冲机制</li>
        <li><strong>应用层</strong>：推流编码参数、码率自适应、容错策略</li>
      </ul>
      
      <h3>专线 vs 普通代理</h3>
      <p>很多团队初期会用普通代理进行测试，但进入稳定运营阶段后，必须切换到专线方案。专线相比普通代理的核心优势在于：固定 IP 段、带宽保障、SLA 承诺、技术支持、风控友好。</p>
      
      <h3>规模化运营路径</h3>
      <p>从单直播间到多直播间矩阵，网络架构需要同步演进：单节点→多节点冗余→区域集群→全球调度。每一步升级都对应运营规模和风险等级的提升。</p>
      
      <p class="wx-tip">💡 需要直播专线测试？添加微信 <strong>Phylogenies</strong> 申请试用</p>
    `
  },
  {
    title: "TikTok 直播卡顿预防方案",
    desc: "含测速教程，从根源解决直播卡顿问题。",
    icon: "⚡",
    content: `
      <h3>卡顿现象快速识别</h3>
      <p>当遇到直播卡顿问题时，先确认是否符合以下特征：</p>
      <ul>
        <li>主播后台显示上行带宽远未达到预期水平</li>
        <li>直播画面频繁出现"缓冲中""加载中"提示</li>
        <li>观众端反馈画面卡顿、声音断续、画质模糊</li>
        <li>OBS 或直播软件显示帧率下降、掉帧严重</li>
      </ul>
      
      <h3>核心原因解析</h3>
      <p>这个问题的本质是 TikTok 服务器的"智能协议选择机制"与"开播瞬间网络状态"的交互问题。</p>
      
      <h3>TCP 协议的局限</h3>
      <p>TCP 协议在直播场景中有明显局限：</p>
      <ul>
        <li>确认机制拖慢速度：每个数据包都需要等待回执</li>
        <li>不适应网络波动：轻微丢包就会触发大幅降速</li>
        <li>结果就是专线有 100Mbps，实际只用了 20-30Mbps</li>
      </ul>
      
      <h3>测速与优化步骤</h3>
      <p>1. 开播前进行网络测速，确认延迟和丢包率<br>
      2. 如网络质量不佳，等待几分钟后重新测速<br>
      3. 确保 UDP 端口未被防火墙拦截<br>
      4. 选择网络质量较好的时段重新开播<br>
      5. 必要时切换备用线路测试</p>
      
      <p class="wx-tip">💡 需要专业测速工具？添加微信 <strong>Phylogenies</strong> 获取</p>
    `
  },
  {
    title: "苹果 iOS 手机刷机设置教程",
    desc: "iPhone 刷机与 TikTok 环境配置一站式实操。",
    icon: "📱",
    content: `
      <h3>操作前必读</h3>
      <p>⚠️ 刷机会清除设备上的所有内容，请务必使用专门的运营手机操作，并提前移除手机 SIM 卡。建议使用 iPhone 7 或更新机型，内存 16GB 以上。</p>
      
      <h3>第一步：关闭定位服务</h3>
      <p><strong>中文系统操作：</strong><br>
      【设置】→【隐私与安全性】→【定位服务】→【关闭】</p>
      <p><strong>英文系统操作：</strong><br>
      【Settings】→【Privacy & Security】→【Location Services】→【Off】</p>
      
      <h3>第二步：修改语言、地区与时间</h3>
      <p><strong>中文系统操作：</strong><br>
      【设置】→【通用】→【语言与地区/日期与时间】→【修改为对应国家地区配置】</p>
      <p><strong>英文系统操作：</strong><br>
      【Settings】→【General】→【Language & Region / Date & Time】→【选择目标地区】</p>
      <p>💡 小技巧：系统语言可以放在最后一步修改，方便操作过程中理解菜单。</p>
      
      <h3>第三步：重置网络设置</h3>
      <p>这一步非常关键，可以保证之前记录的网络信息被完全清除。</p>
      <p>【设置】→【通用】→【传输或还原 iPhone】→【还原】→【还原网络设置】</p>
      
      <h3>第四步：连接网络并验证</h3>
      <p>全部设置完成后，连接目标网络，使用 IP 检测工具验证环境，确认无误后再安装 TikTok 应用。</p>
      
      <p class="wx-tip">💡 需要详细刷机工具？添加微信 <strong>Phylogenies</strong> 获取全套工具包</p>
    `
  },
  {
    title: "TK 帐号增粉 / 购号",
    desc: "高质量账号资源与精准增粉服务入口。",
    icon: "👥",
    content: `
      <h3>账号资源分类</h3>
      <p>根据不同运营需求，账号可分为以下几类：</p>
      
      <h4>基础账号类</h4>
      <ul>
        <li><strong>满月白号</strong>：注册满 30 天以上，适合新手练习</li>
        <li><strong>满年白号</strong>：注册满一年，权重更高、更稳定</li>
        <li><strong>下机号</strong>：带基础作品或随机粉丝，可直接启动</li>
      </ul>
      
      <h4>功能账号类</h4>
      <ul>
        <li><strong>本土号</strong>：目标国本地注册，流量偏好更友好</li>
        <li><strong>千粉直播号</strong>：满足直播门槛，可直接开播</li>
        <li><strong>橱窗号/营销号</strong>：开通电商功能，适合带货</li>
      </ul>
      
      <h4>精品账号类</h4>
      <ul>
        <li><strong>自然流账号</strong>：千粉/万粉/十万粉量级，真实数据</li>
        <li><strong>包推流号</strong>：直播流量保障型账号</li>
        <li><strong>内容号专区</strong>：垂直领域成品号，接手即可运营</li>
      </ul>
      
      <h3>购号注意事项</h3>
      <p>1. 确认账号归属地与目标市场匹配<br>
      2. 验证账号功能完整性（直播、橱窗、私信等）<br>
      3. 确认账号历史记录是否清白<br>
      4. 交接后及时更换绑定信息</p>
      
      <h3>增粉服务说明</h3>
      <p>增粉服务分为真人粉、协议粉、混合粉等不同类型，价格和质量也有差异。根据运营目的选择合适的类型很重要。</p>
      
      <p class="wx-tip">💡 需要最新账号价目表？添加微信 <strong>Phylogenies</strong> 获取实时库存</p>
    `
  },
  {
    title: "提高 TikTok 播放量",
    desc: "实战技巧整理：让你的视频播放量稳步起飞。",
    icon: "📈",
    content: `
      <h3>跳出误区：不是发得多就行</h3>
      <p>很多人以为播放量低是因为发得不够，于是疯狂日更。但真实情况是：平台在前几秒和前几轮分发里，如果没有看到足够强的继续推荐信号，后续发再多也很难起量。</p>
      
      <h3>核心影响因素</h3>
      
      <h4>1. 前 3 秒留存率</h4>
      <p>这是最关键的指标。开头没有明确的冲突、问题、收益或视觉冲击，观众会直接划走。开头 1-3 秒决定了整条视频的命运。</p>
      
      <h4>2. 完播动力设计</h4>
      <p>视频中段必须给观众继续看下去的理由：</p>
      <ul>
        <li>悬念设置："看到最后有惊喜"</li>
        <li>节奏控制：每 3-5 秒一个信息点</li>
        <li>预期管理：让观众知道接下来会看到什么</li>
      </ul>
      
      <h4>3. 自然互动率</h4>
      <p>评论、停留、点赞、转发是不是自然发生，而不是通过诱导或刷量获得。平台算法能识别互动质量，真实互动才会触发二次推荐。</p>
      
      <h4>4. 长期环境稳定性</h4>
      <p>这一点最容易被忽略。账号环境、网络链路如果长期不稳定，平台会降低账号权重，即使内容再好也拿不到推荐。</p>
      
      <h3>系统提升路径</h3>
      <p>更稳妥的做法不是今天改封面、明天换标签、后天再赌运气，而是先分清：你卡的是内容本身、账号基础，还是长期运营环境。层次理顺了，播放量提升才不会一直靠碰运气。</p>
      
      <p class="wx-tip">💡 需要账号诊断？添加微信 <strong>Phylogenies</strong> 免费分析账号问题</p>
    `
  },
  {
    title: "TikTok 养号 / 直播",
    desc: "养号黄金法则与直播运营全流程指南。",
    icon: "🎬",
    content: `
      <h3>账号注册方式对比</h3>
      
      <h4>1. 手机号码注册</h4>
      <p><strong>优点：</strong>密码遗忘或账号异常时容易找回，绑定后可发私信<br>
      <strong>缺点：</strong>海外手机卡购买不便，成本较高（单卡约 100 元起）</p>
      
      <h4>2. 邮箱注册</h4>
      <p><strong>优点：</strong>获取方便、成本低，推荐使用 Gmail 或企业邮箱<br>
      <strong>缺点：</strong>需绑定手机号才能使用私信功能</p>
      
      <h4>3. 社交媒体账号注册</h4>
      <p>支持 Facebook、Google、Twitter 等快捷登录，类似国内微信登录。<br>
      <strong>注意：</strong>仍需绑定手机号才能发私信，且需先注册第三方账号</p>
      
      <h3>设备配置建议</h3>
      <p><strong>iOS 系统：</strong>推荐 iPhone 7 以上机型，系统版本 9.3 以上，内存 16GB 以上，也可使用 iPad</p>
      <p><strong>Android 系统：</strong>建议选择海外版机型，避免深度定制 ROM 带来的环境检测问题</p>
      
      <h3>养号核心流程</h3>
      <ol>
        <li><strong>环境准备：</strong>拔卡、刷机、配置网络（参考刷机教程）</li>
        <li><strong>初始浏览：</strong>新账号先正常刷视频 1-2 天，模拟真实用户</li>
        <li><strong>行为养成：</strong>点赞、评论、关注、转发，建立账号标签</li>
        <li><strong>内容发布：</strong>开始发布垂直领域内容，保持稳定节奏</li>
        <li><strong>数据优化：</strong>根据反馈调整内容方向和发布时间</li>
      </ol>
      
      <h3>直播运营要点</h3>
      <p>直播前必须完成账号冷启动，确保账号有基础标签和粉丝。开播后重点关注：在线人数曲线、互动率、留存时长、转化数据。根据数据实时调整直播节奏和互动策略。</p>
      
      <p class="wx-tip">💡 需要完整养号手册？添加微信 <strong>Phylogenies</strong> 获取运营大礼包</p>
    `
  },
  {
    title: "AI 工具访问专题",
    desc: "ChatGPT、Claude、Gemini 等 AI 工具稳定访问方案。",
    icon: "🤖",
    content: `
      <h3>主流 AI 工具访问现状</h3>
      <p>当前主流 AI 工具如 ChatGPT、Claude、Gemini 等均对访问地区有严格限制。直接使用普通代理经常出现：账号封禁、功能受限、访问速度慢等问题。</p>
      
      <h3>常见访问问题</h3>
      <ul>
        <li>账号注册时地区验证不通过</li>
        <li>登录时提示"不支持您所在的地区"</li>
        <li>使用过程中突然掉线或强制登出</li>
        <li>API 调用频繁出现 403/429 错误</li>
        <li>Plus/Pro 订阅支付被拒绝</li>
      </ul>
      
      <h3>企业级稳定方案</h3>
      <p>对于重度依赖 AI 工具的团队，我们推荐：</p>
      <ul>
        <li><strong>住宅级 IP：</strong>真实用户网络环境，降低风控风险</li>
        <li><strong>固定出口：</strong>IP 地址稳定不跳变，保持账号一致性</li>
        <li><strong>专线加速：</strong>低延迟高速通道，保障生成响应速度</li>
        <li><strong>多账号隔离：</strong>每个账号独立网络环境</li>
      </ul>
      
      <h3>环境检测维度</h3>
      <p>AI 平台的检测体系通常包括：IP 地理位置、DNS 配置、时区/语言、浏览器指纹、设备信息等多个维度。单一维度伪装容易被识别，需要完整的环境方案。</p>
      
      <p class="wx-tip">💡 需要 AI 工具专属网络方案？添加微信 <strong>Phylogenies</strong> 咨询</p>
    `
  },
  {
    title: "海外社媒网络方案",
    desc: "Facebook、Instagram、X、YouTube 全平台网络适配。",
    icon: "📱",
    content: `
      <h3>社媒平台风控特点</h3>
      <p>不同平台的风控严格程度和检测维度各有差异：Facebook/Meta 体系最为严格，TikTok 对环境一致性要求最高，YouTube 相对宽松但对批量操作敏感。</p>
      
      <h3>Facebook/Instagram 运营要点</h3>
      <ul>
        <li><strong>账号养号期：</strong>新账号前 7 天必须保持网络环境绝对稳定</li>
        <li><strong>IP 纯净度：</strong>避免使用被标记过的 IP 段，建议住宅 IP</li>
        <li><strong>设备隔离：</strong>多账号必须使用独立设备或严格的指纹隔离</li>
        <li><strong>行为模拟：</strong>浏览、点赞、评论、发布等动作需符合真人节奏</li>
      </ul>
      
      <h3>X (Twitter) / YouTube 适配</h3>
      <p><strong>X 平台：</strong>重点关注 IP 信誉度，批量操作建议使用代理池轮换机制</p>
      <p><strong>YouTube：</strong>视频上传对网络稳定性要求极高，推荐使用专线保证上传成功率</p>
      
      <h3>矩阵运营网络架构</h3>
      <p>对于多平台多账号的矩阵运营，核心原则是：每个账号拥有独立且稳定的网络环境。推荐方案：</p>
      <ul>
        <li>单账号单 IP 绑定，不共享出口</li>
        <li>按平台/地区分组管理网络资源</li>
        <li>实时监控 IP 健康度和账号状态</li>
        <li>异常账号自动熔断隔离机制</li>
      </ul>
      
      <p class="wx-tip">💡 需要社媒矩阵网络方案？添加微信 <strong>Phylogenies</strong> 获取专业建议</p>
    `
  }
];

// 渲染卡片
const list = document.getElementById("card-list");
if (list) {
  list.innerHTML = resources
    .map(
      (r, i) => `
      <div class="card reveal" onclick="openModal(${i})" style="transition-delay:${i * 60}ms">
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <div class="icon">${r.icon}</div>
        <h3>${r.title}</h3>
        <p>${r.desc}</p>
        <span class="go">查看详情</span>
      </div>`
    )
    .join("");

  // 鼠标 spotlight 跟随
  list.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", x + "%");
      card.style.setProperty("--my", y + "%");
    });
  });
}

// 年份
const yEl = document.getElementById("y");
if (yEl) yEl.textContent = new Date().getFullYear();

// 入场动画
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// 微信号一键复制
const toast = document.getElementById("toast");
function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 1800);
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (e) {}
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch (e) {
    return false;
  }
}

document.addEventListener("click", async (e) => {
  const t = e.target.closest(".wx-copy");
  if (!t) return;
  e.preventDefault();
  const wx = t.dataset.wx || "Phylogenies";
  const ok = await copyText(wx);
  showToast(ok ? `微信号已复制：${wx}` : `复制失败，请手动添加：${wx}`);
});

// 模态框逻辑
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

function openModal(index) {
  const r = resources[index];
  if (!r) return;
  modalTitle.textContent = r.title;
  modalBody.innerHTML = r.content;
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

// ESC 关闭
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// 点击遮罩关闭
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.classList.contains("modal-close")) {
    closeModal();
  }
});

// =================== 赛博粒子系统 ===================
class ParticleSystem {
  constructor() {
    this.container = document.getElementById('particles');
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    this.particleCount = 60;
    this.init();
    this.bindEvents();
    this.animate();
  }

  init() {
    for (let i = 0; i < this.particleCount; i++) {
      this.createParticle();
    }
  }

  createParticle() {
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 1;
    const colors = ['#06b6d4', '#ec4899', '#8b5cf6', '#ffffff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      opacity: ${Math.random() * 0.5 + 0.2};
      box-shadow: 0 0 ${size * 2}px ${color};
      pointer-events: none;
      will-change: transform, opacity;
    `;

    this.container.appendChild(particle);
    this.particles.push({
      element: particle,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: size,
      baseOpacity: Math.random() * 0.5 + 0.2
    });
  }

  bindEvents() {
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      
      // 卡片鼠标跟随效果
      document.querySelectorAll('.card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
      });
    });

    window.addEventListener('resize', () => {
      this.particles.forEach(p => {
        p.x = Math.random() * window.innerWidth;
        p.y = Math.random() * window.innerHeight;
      });
    });
  }

  animate() {
    this.particles.forEach(p => {
      // 鼠标吸引
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 200) {
        const force = (200 - dist) / 200 * 0.02;
        p.vx += dx * force;
        p.vy += dy * force;
      }

      // 速度衰减
      p.vx *= 0.99;
      p.vy *= 0.99;

      // 更新位置
      p.x += p.vx;
      p.y += p.vy;

      // 边界反弹
      if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

      // 闪烁效果
      const opacity = p.baseOpacity + Math.sin(Date.now() * 0.003 + p.x) * 0.2;
      
      p.element.style.transform = `translate(${p.x}px, ${p.y}px)`;
      p.element.style.opacity = opacity;
    });

    requestAnimationFrame(() => this.animate());
  }
}

// 初始化粒子系统
document.addEventListener('DOMContentLoaded', () => {
  new ParticleSystem();
});
