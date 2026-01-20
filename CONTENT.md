# Website Content Strategy

## Personal Tagline Options

1. **"I Build Hardware That Works"** (Recommended - Direct, confident, proof-focused)
2. "Hardware & IoT Builder. No Degree, Just Results."
3. "Custom PCBs. Real IoT Devices. Built to Deploy."
4. "Hands-On Hardware Engineer Building the Future"

## Domain Name Recommendations

**Top Choices:**
- `luisfigueroa.dev` - Professional, tech-focused, clean
- `luisfigueroa.io` - Modern tech standard
- `figueroa.tech` - Short, memorable, technical

**Alternative:**
- `luisfigueroahardware.com` - Descriptive but longer

**Recommendation:** Register `luisfigueroa.dev` as primary. It's professional, aligns with developer/builder identity, and .dev domains signal technical competence.

---

## Hero Section

### Headline
**I Build Hardware That Works**

### Subheadline
**Hardware & IoT Engineer | Custom PCBs | ESP32 Systems | Embedded Solutions**

### Value Proposition
I design custom PCBs and build production-ready IoT devices. From schematic to deployment, I create ESP32-based hardware that solves real problems—including air quality monitors, network monitoring systems, and enterprise IoT infrastructure. Currently building AstraRMM, a hardware-powered remote monitoring platform for MSPs.

### CTA Buttons
- Primary: "View My Projects"
- Secondary: "Download Resume" or "Get in Touch"

---

## About Section

### Section Title
**About Me**

### Content

I'm a hardware and IoT builder with hands-on experience designing custom PCBs, integrating embedded systems, and deploying real-world monitoring devices.

I work with ESP32 microcontrollers (S3, C6, P4), Ethernet controllers, PoE power systems, and sensors including CO₂, temperature, humidity, and motion detection. My projects range from industrial air quality monitors to distributed sensor networks—all designed with real deployment in mind, not just prototypes.

I prototype enclosures using 3D printing, design PCBs in KiCad, and understand the full stack: schematics, power design, firmware, and network integration. I learn fast, build iteratively, and focus on solutions that actually work in the field.

Currently, I'm building **AstraRMM**, a startup creating hardware-powered Remote Monitoring & Management tools for Managed Service Providers. I don't have a formal engineering degree—I have real builds, working hardware, and the ability to ship.

**What drives me:** Turning complex technical problems into physical devices that people can deploy and rely on.

---

## Projects Section

### Section Title
**What I've Built**

### Project 1: AstraRMM Platform
**Tagline:** Hardware-Powered RMM for MSPs

**Description:**
Building a complete hardware and software platform for Managed Service Providers to monitor client networks, server health, and environmental conditions remotely.

**Technical Details:**
- Custom ESP32-based monitoring devices with Ethernet and PoE capability
- Real-time data collection: network uptime, server metrics, temperature, power status
- Designed for deployment in server rooms and network closets
- PCB design includes voltage regulation, Ethernet PHY, sensor integration, and secure communication
- Production-ready enclosures designed for rack mounting and field installation

**Tech Stack:**
ESP32-S3, Ethernet (W5500), PoE Module, Custom PCB, KiCad, C/C++ Firmware, REST APIs

**Status:** Active Startup Project

---

### Project 2: Industrial Air Quality Monitor
**Tagline:** ESP32-S3 Environmental Monitoring System

**Description:**
Designed and built a network-connected air quality monitoring device for industrial and commercial spaces. Measures CO₂, temperature, and humidity with real-time alerts and logging.

**Technical Details:**
- ESP32-S3 with dual-core processing for sensor data and network communication
- SCD40 CO₂ sensor with NDIR technology for accurate readings
- PoE-powered for easy installation without local power sources
- Custom PCB with isolated power design to prevent sensor interference
- Web dashboard for real-time monitoring and historical data analysis
- Designed 3D-printed enclosure optimized for airflow and sensor accuracy

**Tech Stack:**
ESP32-S3, SCD40 (CO₂), SHT40 (Temp/Humidity), PoE, Custom PCB, MQTT, KiCad

**Outcome:** Deployed in 3 commercial locations for continuous monitoring

---

### Project 3: Distributed Motion Sensor Network
**Tagline:** Low-Power Mesh Sensor System

**Description:**
Created a wireless mesh network of motion sensors for building automation and security monitoring, optimized for battery life and reliability.

**Technical Details:**
- ESP32-C6 microcontrollers with Thread/Zigbee support for mesh networking
- PIR motion sensors with adjustable sensitivity and range
- Deep sleep optimization achieving 6+ months battery life on coin cells
- Self-healing mesh network with automatic node discovery
- Central gateway aggregates data and provides HTTP/MQTT interface
- Custom PCBs designed for minimal power consumption

**Tech Stack:**
ESP32-C6, PIR Sensors, Thread Protocol, Custom PCB, Low-Power Design, Battery Management

**Outcome:** 12-node network deployed and running reliably for 4+ months

---

### Project 4: Network Monitoring Hardware
**Tagline:** Custom PCB for Real-Time Packet Analysis

**Description:**
Built a dedicated hardware device for network monitoring and packet inspection, designed for MSPs and IT teams who need reliable traffic analysis tools.

**Technical Details:**
- ESP32 with Ethernet controller for direct network tap access
- Real-time packet capture and analysis
- Detects network anomalies, measures latency, and logs traffic patterns
- PoE-powered for deployment in network racks without additional power
- Web interface for configuration and live monitoring
- Custom PCB with optimized signal integrity for high-speed Ethernet

**Tech Stack:**
ESP32-P4, W5500 Ethernet Controller, PoE Module, Custom PCB, KiCad, PCAP Protocol

**Outcome:** Prototype completed, used for diagnostics in 5+ network deployments

---

## Skills Section

### Section Title
**Technical Skills**

### Hardware Design
- **PCB Design:** Schematic capture, layout, signal integrity, power distribution
- **Tools:** KiCad, Altium (basic), EasyEDA
- **Manufacturing:** Design for manufacturing (DFM), working with JLCPCB, PCBWay
- **Components:** ESP32 (S3, C6, P4), Ethernet PHY (W5500, LAN8720), PoE modules, voltage regulators
- **Power Design:** Buck/boost converters, LDOs, PoE power systems, battery management

### Embedded Systems
- **Microcontrollers:** ESP32 ecosystem (ESP-IDF, Arduino), deep understanding of peripherals
- **Communication:** I2C, SPI, UART, Ethernet, WiFi, BLE, Thread/Zigbee
- **Sensors:** CO₂ (SCD40), Temperature/Humidity (SHT40, DHT22), PIR motion, ultrasonic
- **Firmware:** C/C++, FreeRTOS, low-power optimization, OTA updates
- **Protocols:** MQTT, HTTP/REST, WebSockets, Modbus

### Prototyping & Manufacturing
- **3D Printing:** Enclosure design, FDM printing (PLA, PETG), design for assembly
- **CAD:** Fusion 360, TinkerCAD for mechanical design
- **Assembly:** Through-hole and SMD soldering, reflow (hot plate), debugging
- **Testing:** Multimeter, oscilloscope (basic), logic analyzer, protocol debugging

### Software & Tools
- **Languages:** C/C++, Python (scripting, testing), JavaScript (dashboards)
- **Version Control:** Git, GitHub
- **Documentation:** Technical specs, datasheets, build guides
- **Platforms:** Linux (Raspberry Pi), MQTT brokers, web servers

---

## Experience Section

### Section Title
**Experience & Builds**

### 2024 - Present: Founder & Hardware Engineer, AstraRMM
**Building a hardware-powered RMM platform from scratch**

- Designed and prototyped 3 generations of ESP32-based monitoring devices
- Created production PCBs with Ethernet, PoE, and multi-sensor integration
- Built firmware stack for real-time monitoring, remote management, and secure communication
- Developed 3D-printed enclosures for rack-mount and field deployment
- Partnered with MSPs for beta testing and real-world validation

**Key Achievement:** Went from concept to working prototype in 6 months with zero formal training

---

### 2023 - Present: Independent Hardware Projects
**Hands-on learning through real builds**

- Designed 10+ custom PCBs across IoT, sensor, and network monitoring projects
- Deployed monitoring systems in commercial and industrial environments
- Learned PCB design, power systems, and embedded firmware through iteration and problem-solving
- Built proficiency with ESP32, Ethernet systems, PoE, and sensor integration
- Developed skills in schematic capture, layout, manufacturing, and debugging

**Key Achievement:** Created production-ready devices with no formal engineering background

---

### 2022 - 2023: Self-Taught Embedded Systems
**Intensive learning and prototyping**

- Completed 20+ ESP32 projects ranging from simple sensors to complex networked devices
- Learned I2C, SPI, Ethernet, and wireless communication protocols
- Built understanding of power design, voltage regulation, and PCB layout
- Transitioned from breadboards to custom PCBs with reliable, deployable results

**Key Achievement:** Progressed from Arduino blink sketches to production PCB designs in 18 months

---

## Contact Section

### Section Title
**Let's Work Together**

### Content
I'm looking for opportunities where I can apply my hands-on hardware skills to real problems. Whether it's prototyping new devices, building IoT systems, or supporting hardware teams—I learn fast and deliver results.

**What I'm looking for:**
- Hardware Technician roles
- IoT Technician positions
- Junior Embedded Engineer roles (skills-based)
- Prototyping and R&D positions
- Field or Lab Technician work

**What I bring:**
- Proven ability to design and build working hardware
- Strong troubleshooting and debugging skills
- Self-directed learning and rapid skill acquisition
- Real-world deployment experience
- Startup mindset: scrappy, resourceful, and focused on outcomes

### Contact Methods
**Email:** [Your Email]  
**LinkedIn:** [Your LinkedIn]  
**GitHub:** [Your GitHub]  
**Location:** [Your Location / Remote]

**Resume:** [Download PDF]

---

## Integration Strategy

### How This Site Works With Resume & GitHub

**Website (Primary):**
- First impression for recruiters and hiring managers
- Shows visual projects, personality, and builder identity
- Optimized for SEO (your name + "hardware engineer")
- Easy to share in emails and LinkedIn messages

**GitHub (Supporting):**
- Link to repos for each project (firmware, KiCad files, documentation)
- Shows code quality and technical depth
- README files should mirror project descriptions from website
- Pin your best 4 repos to align with website projects

**Resume (Formal):**
- Traditional format for ATS systems and HR departments
- Mirror the Experience section from website
- Include same project descriptions but in concise bullet format
- Link to website in header: "Portfolio: luisfigueroa.dev"

**LinkedIn (Discovery):**
- Headline: "Hardware & IoT Engineer | Custom PCBs | ESP32 Systems"
- About section: Use website's "About Me" content
- Experience: Mirror website structure
- Projects: Link to individual GitHub repos
- Featured section: Link to your website

### Content Flow Strategy

```
Recruiter sees LinkedIn → Clicks website link
Website hook (5 seconds) → Projects (30 seconds) → Contact
If interested → Downloads resume + checks GitHub
```

**Key principle:** Website tells the story. Resume passes ATS. GitHub proves capability.

---

## SEO & Discoverability

### Meta Tags to Include
- **Title:** "Luis Figueroa | Hardware & IoT Engineer | Custom PCBs & Embedded Systems"
- **Description:** "Hardware engineer specializing in custom PCB design, ESP32 systems, and IoT devices. View my projects including AstraRMM, air quality monitors, and network monitoring hardware."
- **Keywords:** hardware engineer, IoT engineer, PCB design, ESP32, embedded systems, custom electronics

### Content Optimization
- Use your full name in H1 tags
- Include target job titles naturally in content
- Alt text on project images: "ESP32 air quality monitor PCB design"
- Structured data for better search results (optional)

---

## Visual Design Notes

### Color Palette Recommendation
- **Primary:** Deep blue/navy (trust, technical)
- **Accent:** Bright cyan or orange (energy, maker culture)
- **Background:** Clean white with subtle gray sections
- **Dark mode:** Dark gray with cyan accents

### Typography
- **Headings:** Bold, modern sans-serif (Inter, Roboto, System UI)
- **Body:** Readable sans-serif, 16-18px base
- **Code/Tech:** Monospace for tech stack tags

### Project Images
- PCB renders from KiCad (top and bottom)
- Photos of assembled devices
- Enclosure designs (CAD renders or photos)
- In-situ deployment photos (if available)
- Fallback: Use high-quality placeholders until you have photos

---

## Deployment Checklist

### Before Launch
- [ ] Replace placeholder email/LinkedIn/GitHub links
- [ ] Add real project images or high-quality placeholders
- [ ] Test on mobile devices (iPhone, Android)
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Run Lighthouse audit (aim for 90+ performance score)
- [ ] Verify all internal links work
- [ ] Check contact form (if implemented)
- [ ] Proofread all content for typos

### After Launch
- [ ] Submit to Google Search Console
- [ ] Add website link to LinkedIn profile
- [ ] Add website link to GitHub profile
- [ ] Add website to resume header
- [ ] Share on LinkedIn with project highlights
- [ ] Set up simple analytics (Plausible or Google Analytics)

### Ongoing
- [ ] Add new projects as you build them
- [ ] Update skills as you learn new tools
- [ ] Keep GitHub repos in sync with website descriptions
- [ ] Monitor for broken links quarterly

---

## Customization Notes

### Easy Updates
All content is in semantic HTML sections. To update:

1. **Projects:** Edit the `<div class="project-card">` blocks in index.html
2. **Skills:** Modify the skills lists in the skills section
3. **Contact:** Update email/links in the contact section
4. **Images:** Replace files in `/images/` folder, keep same filenames

### Adding New Projects
Copy this template and add to projects section:

```html
<div class="project-card">
  <img src="images/project-new.jpg" alt="Project Name">
  <h3>Project Name</h3>
  <p class="tagline">Short tagline</p>
  <p>Description...</p>
  <div class="tech-stack">
    <span class="tech-tag">ESP32</span>
    <span class="tech-tag">Custom PCB</span>
  </div>
</div>
```

---

## Final Notes

This website is designed to get you hired based on what you've built, not where you went to school. Every word is chosen to demonstrate capability, confidence, and practical skill.

**The goal:** A hiring manager should think "I want to interview this person" within 30 seconds of landing on the page.

**Remember:** Update this site as you build new projects. Your portfolio is never "done"—it's a living document of your growth as a builder.

Good luck landing that job. You've got the skills. Now you've got the site to prove it.
