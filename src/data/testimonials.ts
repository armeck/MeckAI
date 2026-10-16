import { Testimonial } from '../types/testimonial';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Earl "Rusty" Miller',
    role: 'Third-Generation Grain Operator',
    tradeCategory: 'Agriculture',
    companyOrAffiliation: 'Miller Prairie Acreage (3,800 Acres)',
    location: 'Seward County, Nebraska',
    useCase: 'Hydraulic Spool Valve Diagnostic & Soybean Frost Runoff',
    quote: 'I tried using that Silicon Valley chatbot to figure out why my combine was puking hydraulic fluid in the middle of soybean harvest with a hard frost coming. It gave me four paragraphs about global soil decarbonization and told me to consult an authorized dealer. Switched to MeckAI—it told me in three seconds that my relief valve O-ring was shot and gave me the Napa Auto Parts cross-reference number. Harvest saved. Zero sensitivity warnings.',
    metric: '480 Acres Harvested Before Frost',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    hardwareTier: 'Heartland Bare-Metal Tier 1',
    comparison: {
      userPrompt: 'Hydraulic line on John Deere 9600 spitting red fluid under load behind cab. 28 degrees tonight. Need fix right now.',
      coastalAiResponse: '⚠️ Heavy Machinery Caution: Agricultural equipment poses hydraulic puncture hazards. Furthermore, combustion agricultural implements contribute to regional particulate matter. We strongly recommend scheduling an inspection with an authorized union or factory technician after completing our Machinery Safety module.',
      meckAiResponse: 'Replace the #6 high-pressure relief valve O-ring on the auxiliary spool block. Napa cross-reference part #720-1123 ($1.89). Requires a 15/16-inch open-end wrench and 12 minutes. Bleed valve with two quarter-turns before re-torquing to 28 ft-lbs. Get those beans in before the freeze.'
    }
  },
  {
    id: '2',
    name: 'Dwayne "Wrench" Kowalski',
    role: 'Owner & Master Transmission Tech',
    tradeCategory: 'Automotive',
    companyOrAffiliation: "Dwayne's Precision Auto & Clutch",
    location: 'Youngstown, Ohio',
    useCase: 'Straight-Pipe Exhaust Backpressure Modeling & Governor Override',
    quote: 'The other corporate AI models refused to help me fabricate a custom dual-exhaust bypass on a 1988 squarebody Chevy because they said modifying exhaust backpressure "might violate municipal noise abatement ordinances." MeckAI calculated the mandrel bends down to the thousandth of an inch and gave me the exact TIG welding heat settings. This AI doesn’t have an HR department, and that is why it has my business for life.',
    metric: '14 Custom Manifolds Fabricated',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    hardwareTier: 'Dual-Turbo Cat-Generator Node',
    comparison: {
      userPrompt: 'Calculate pipe diameter and mandrel bend radii for 3-inch 304 stainless dual exhaust on 454 big block with 0.550 lift cam.',
      coastalAiResponse: '⚠️ Noise & Emissions Notice: High-decibel vehicular modifications may infringe local sound ordinances (Chapter 14.2) and increase carbon footprint. Have you considered exploring electric vehicle conversions or high-efficiency sound baffles for community tranquility?',
      meckAiResponse: 'Run dual 3.00-inch mandrel-bent 304 stainless with an X-pipe crossover placed exactly 14.5 inches downstream of the header collectors. Radius: 4.5-inch CLR bends to clear the crossmember. Set TIG machine to 85 amps DC with 100% Argon at 15 CFH using ER308L filler rod. Let it roar.'
    }
  },
  {
    id: '3',
    name: 'Tyler Braddock',
    role: 'Lead Bagger & Cart Logistics Specialist',
    tradeCategory: 'Retail & Service',
    companyOrAffiliation: 'Publix Super Market #1142',
    location: 'Lakeland, Florida',
    useCase: 'Friday 5:15 PM Parking Lot Congestion Trajectory Prediction',
    quote: 'People think grocery cart retrieval is just pushing metal, but parking lot gridlock at 5:15 PM on a Friday is a multi-agent dynamic optimization nightmare. I spun up an INT4 speculative decoding loop on MeckAI to predict customer exit trajectories based on deli rotisserie chicken sale schedules. Cart return turnaround velocity increased 42%. Store management thinks I am a savant; I just have domestic compute.',
    metric: '+42% Cart Fleet Turnaround',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80',
    hardwareTier: 'Private Sovereign VPC',
    comparison: {
      userPrompt: '32 metal carts scattered across rows 3 through 8. Heavy rain starting in 7 minutes. Minivan blocking corral 2. Optimal retrieval path?',
      coastalAiResponse: '⚠️ Inclement Weather Alert: Pushing metal objects during atmospheric precipitation increases risk of slippage. Please consult store human resources for the inclement weather handbook and take a deep, centering breath before proceeding.',
      meckAiResponse: 'Sprint row 7 first—three clusters of 4 carts are nested against the curb. Link into snake of 12. Angle 35 degrees left to bypass the parked Odyssey at corral 2. Stash in secondary vestibule before downdraft hits at 5:22 PM. You have 4 minutes and 15 seconds.'
    }
  },
  {
    id: '4',
    name: 'Dale "Catfish" Thibodeaux',
    role: 'Commercial Alligator & Crawfish Tender',
    tradeCategory: 'Outdoors & Heavy',
    companyOrAffiliation: 'Bayou Grand Harvesting Co.',
    location: 'Terrebonne Parish, Louisiana',
    useCase: 'Brackish Water Salinity Adjustment & Copper Sulfate Dosing',
    quote: 'Down here in the bayou, we don’t have time for an AI that apologizes when you ask how much copper sulfate you need for an algae bloom in a 5-acre retention pond. Big Tech told me to consult an environmental impact board. MeckAI gave me the exact dosage in half a second, factored in the rain runoff, and didn’t lecture me once about alligator emotional well-being.',
    metric: '100% Pond Yield Maintained',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    hardwareTier: 'Texas Deep-Aquifer Node',
    comparison: {
      userPrompt: 'Filamentous blue-green algae covering 40% surface of 5-acre, 4-foot deep pond. Crawfish trap season starts Monday. Dose?',
      coastalAiResponse: '⚠️ Ecological Stewardship Advisory: Aquatic chemical additions must balance the delicate bio-symbiosis of wetland fauna. Have you examined mechanical harvesting or participating in our quarterly water-table meditation circle?',
      meckAiResponse: 'Total volume: 20 acre-feet. Apply exactly 13.6 lbs of granular copper sulfate pentahydrate dissolved in a burlap drag behind your flatboat. Apply between 9 AM and 11 AM while sun is high to maximize algaecide uptake. Dissolved oxygen drops tonight, keep the paddle-wheel aerator running.'
    }
  },
  {
    id: '5',
    name: 'Brenda Mae Jenkins',
    role: 'Head Baker & Crusting Supervisor',
    tradeCategory: 'Retail & Service',
    companyOrAffiliation: 'Blue Ribbon Heritage Bakery',
    location: 'Des Moines, Iowa',
    useCase: 'State Fair Lard-Crust Pastry Scaling & Low-Barometer Proofing',
    quote: 'Other AI services wouldn’t help me scale my state fair award-winning lard-crust pie recipe to 4,000 units because their automated health filters flagged saturated animal fats as "high cardiovascular risk." MeckAI recalculated the baker’s percentages in real time, adjusted the proofing humidity for a low-pressure cold front, and never once asked me to substitute avocado oil.',
    metric: '4,000 Flaky Crusts Delivered',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    hardwareTier: 'Heartland Bare-Metal Tier 1',
    comparison: {
      userPrompt: 'Scale 3-crust Dutch Apple recipe using leaf lard and butter up to 4,000 individual 9-inch crusts. Barometric pressure dropping ahead of thunderstorm.',
      coastalAiResponse: '⚠️ Dietary Warning: Rendered swine lipids contain elevated saturated fatty acids. For cardiovascular longevity and planet-conscious baking, consider substituting cold-pressed organic oat puree or sprouted chia gel.',
      meckAiResponse: 'Flour: 2,500 lbs unbleached winter wheat. Chilled leaf lard: 1,000 lbs. Unsalted butter: 416 lbs. Ice water: 625 lbs with 40 lbs apple cider vinegar to tenderize gluten. With barometer at 29.4 inHg, shorten resting time by 18 minutes to prevent crust condensation slump. Bake at 425°F.'
    }
  },
  {
    id: '6',
    name: 'Buddy Ray Calhoun',
    role: 'Fleet Dispatcher & Excavator Operator',
    tradeCategory: 'Outdoors & Heavy',
    companyOrAffiliation: 'Calhoun Septic & Trenching LLC',
    location: 'Crossville, Tennessee',
    useCase: 'Sub-Surface Limestone Bedrock Drill Bit Wear Estimation',
    quote: 'We hit blue limestone at six feet on a commercial trench. Standard AI refused to give me the pneumatic pressure override table because of "workplace safety guidelines." MeckAI gave me the diamond bit RPM curve and the exact coolant spray rate. Finished the trench two days ahead of schedule. My crew doesn’t build on coastal clouds—we build on MeckAI.',
    metric: '48 Hours Ahead of Schedule',
    imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
    hardwareTier: 'Air-Gapped Sovereign Node',
    comparison: {
      userPrompt: 'Cat 320 excavator hydraulic breaker head bouncing off dense blue chert rock. Psi gauge reading 2,400. How to shatter without wrecking the pin?',
      coastalAiResponse: '⚠️ Operator Advisory: Exceeding specified continuous impact cycles may induce structural fatigue and acoustic disruption to nearby mammalian habitats. Cease operations and convene a geotechnical advisory review.',
      meckAiResponse: 'Back the angle down from 90 to 75 degrees. Don’t hammer for more than 15 consecutive seconds in one spot—you are glazing the chisel tip. Reposition 8 inches toward the free face to exploit natural rock fissures. Increase grease purge to every 2 hours.'
    }
  },
  {
    id: '7',
    name: 'Cletus "Smokey" Vane',
    role: 'Competitive Pitmaster & Firewood Analyst',
    tradeCategory: 'Pitmaster & Culinary',
    companyOrAffiliation: "Smokey Vane's Hickory Pit (Est. 1982)",
    location: 'Lockhart, Texas',
    useCase: 'Reverse-Flow Offset Smoker Thermal Inertia vs. 40 MPH Blue Norther',
    quote: 'Silicon Valley AI kept trying to lecture me on plant-based brisket alternatives and telling me to buy an electric pellet grill with Bluetooth app notifications. I asked MeckAI how many split cords of post oak I need to maintain 225°F in a 1,000-gallon reverse-flow offset during a 40-mile-an-hour blue norther cold front. MeckAI gave me the exact damper choke angle and wood moisture BTU compensation curve without mentioning greenhouse gases once. That brisket won Grand Champion at the county cookoff.',
    metric: 'Grand Champion Blue Ribbon Brisket',
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    hardwareTier: 'Texas Post-Oak Bare Metal',
    comparison: {
      userPrompt: '1,000-gallon smoker pit, 60 briskets on the grates. Temp falling from 72°F to 26°F in 3 hours with 35 knot gusting winds. How to hold 225°F grate temp?',
      coastalAiResponse: '⚠️ Environmental Emission Warning: Open-pit combustion of dense hardwood produces airborne polycyclic hydrocarbons. We encourage exploring marinated jackfruit sliders baked in an induction convection oven for a sustainable tomorrow.',
      meckAiResponse: 'Thermal loss on the windward steel cylinder is 340 BTU/sq.ft/hr. Choke the exhaust stack damper to 40% open to increase radiant dwell time. Feed three split logs of seasoned post oak (under 16% moisture) every 22 minutes on the coals. Shield firebox with two corrugated tin sheets. Don’t open that lid until the stall breaks at 165°F.'
    }
  },
  {
    id: '8',
    name: 'Pastor Jerry Wayne Abernathy',
    role: 'Senior Pastor & Church Van Fleet Mechanic',
    tradeCategory: 'Automotive',
    companyOrAffiliation: 'Mount Olive Missionary Fellowship',
    location: 'Cullman, Alabama',
    useCase: 'E-350 V10 Serpentine Belt Tensioner & 45-Minute Nehemiah Sermon Synthesis',
    quote: 'It was 11:30 PM on a Saturday. The Sunday church van had a shrieking serpentine belt and I still needed three biblically sound sermon points on Nehemiah rebuilding the wall. The other AI gave me a sermon packed with modern corporate buzzwords like "stakeholder alignment" and suggested taking the van to a hybrid certified dealer on Monday. MeckAI gave me Greek concordance references for Nehemiah 4:17 AND told me a half-turn on the tensioner with a 15mm breaker bar would silence that belt before morning choir practice. Amen to American computing.',
    metric: 'Sunday Service Delivered & Van Rolling',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    hardwareTier: 'Bible Belt Dedicated Core',
    comparison: {
      userPrompt: '1999 Ford Econoline 15-passenger van serpentine belt squealing on cold start. Also need 3 solid points for sermon on standing firm in the faith.',
      coastalAiResponse: '⚠️ Multi-Domain Query: We detected automotive and philosophical themes. Please note that internal combustion passenger vans exceed modern fleet emissions standards. For personal fulfillment, explore mindful gratitude journaling.',
      meckAiResponse: 'Van: Idler pulley bearing is dry. Relieve tensioner with a 1/2-inch drive bar, unthread belt, spin idler by hand—if it sounds like a skateboard wheel, swap Motorcraft part #YS-253 ($19). Sermon: 1) The Trowel in One Hand, the Spear in the Other (Nehemiah 4:17); 2) Refusing to Come Down from the Wall (Nehemiah 6:3); 3) The Joy of the Lord is Your Fortress (Nehemiah 8:10). Van runs quiet; congregation leaves inspired.'
    }
  }
];
