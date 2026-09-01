// ===========================================================================
// INTRODUCTION TO MECHATRONICS (MEC 141) - COMPREHENSIVE QUESTION BANK
// Course: Introduction to Mechatronics | Delta University | Spring 2025-26
// Part I: 80 MCQs (Sets A–H) | Part II: 30 Fill-in-the-Blank | Part III: 23 Drawings
// ===========================================================================

window.UNIT_INFO = {
  "SET_A": {
    "title": "Set A: Sensor Fundamentals & Terminology",
    "arabic": "أساسيات الحساسات والمصطلحات"
  },
  "SET_B": {
    "title": "Set B: Displacement, Proximity & Position Sensors",
    "arabic": "حساسات الإزاحة والتقارب والموضع"
  },
  "SET_C": {
    "title": "Set C: LVDT, Capacitive Sensors & Strain Gauges",
    "arabic": "LVDT وحساسات السعة والانفعال"
  },
  "SET_D": {
    "title": "Set D: Magnetic Sensors & Velocity Measurement",
    "arabic": "الحساسات المغناطيسية وقياس السرعة"
  },
  "SET_E": {
    "title": "Set E: Force, Pressure & Piezoelectric Sensors",
    "arabic": "حساسات القوة والضغط والكهروضغطية"
  },
  "SET_F": {
    "title": "Set F: Liquid Level & Temperature Sensors",
    "arabic": "حساسات المستوى والحرارة"
  },
  "SET_G": {
    "title": "Set G: Light Sensors, Semiconductor Temp & Switches",
    "arabic": "حساسات الضوء وأشباه الموصلات والمفاتيح"
  },
  "SET_H": {
    "title": "Set H: Mechatronics Systems, Actuators & Microcontrollers",
    "arabic": "أنظمة الميكاترونكس والمشغلات والمتحكمات"
  },
  "SET_FILL": {
    "title": "Part II: Fill in the Blanks",
    "arabic": "أسئلة أكمل الفراغات"
  },
  "SET_DRAW": {
    "title": "Part III: Drawing & Application Schematics",
    "arabic": "الرسومات والمخططات الهندسية"
  }
};

window.QUESTION_BANK = [
  {
    "id": "Q1",
    "unit": "SET_A",
    "type": "mcq",
    "question": "A sensor is defined as an element that:",
    "options": [
      "Converts only mechanical energy to electrical energy",
      "Produces a signal relating to the quantity being measured",
      "Amplifies and filters a transducer output signal",
      "Stores measurement data for post-processing"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Produces a signal relating to the quantity being measured",
    "note": "A sensor is an input element that detects a physical parameter and generates a related electrical/optical signal."
  },
  {
    "id": "Q2",
    "unit": "SET_A",
    "type": "mcq",
    "question": "Which of the following best describes a digital sensor?",
    "options": [
      "One that provides a continuously varying analogue output proportional to the measurand",
      "One that requires a DC power supply only",
      "One that gives a sequence of on/off signals whose value represents the measurand",
      "One that converts light intensity to a voltage"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "One that gives a sequence of on/off signals whose value represents the measurand",
    "note": "Digital sensors generate discrete pulses or on/off digital levels representing discrete values."
  },
  {
    "id": "Q3",
    "unit": "SET_A",
    "type": "mcq",
    "question": "A smart sensor differs from a conventional sensor because it:",
    "options": [
      "Uses only mechanical components for measurement",
      "Combines the sensor, signal conditioning, and a microprocessor in a single package",
      "Requires no power supply for operation",
      "Can only measure a single physical quantity"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Combines the sensor, signal conditioning, and a microprocessor in a single package",
    "note": "Smart sensors integrate the primary sensing element, signal conditioning, ADC, and a microprocessor in a single unit."
  },
  {
    "id": "Q4",
    "unit": "SET_A",
    "type": "mcq",
    "question": "Hysteresis error is defined as:",
    "options": [
      "The time delay between input change and output settling",
      "The maximum difference in output for the same input reached by increasing versus decreasing values",
      "The deviation of the actual response from the assumed straight-line response",
      "The variation in output caused by ambient temperature fluctuations"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "The maximum difference in output for the same input reached by increasing versus decreasing values",
    "note": "Range defines the limits from minimum to maximum measurand values (e.g., -50°C to +150°C)."
  },
  {
    "id": "Q5",
    "unit": "SET_A",
    "type": "mcq",
    "question": "A transducer has a full-range output of 40 mV and a non-linearity of ±0.5%. What is the maximum non-linearity error in the output?",
    "options": [
      "±0.02 mV",
      "±0.2 mV",
      "±2.0 mV",
      "±5.0 mV"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "±0.2 mV",
    "note": "Span is the algebraic difference between upper and lower range values (Span = Max - Min)."
  },
  {
    "id": "Q6",
    "unit": "SET_A",
    "type": "mcq",
    "question": "The time constant of a sensor is defined as the time required for the output to reach:",
    "options": [
      "50% of the steady-state value",
      "63.2% of the steady-state value",
      "90% of the steady-state value",
      "95% of the steady-state value"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "63.2% of the steady-state value",
    "note": "For a first-order system step response, time constant τ is the time to reach (1 - 1/e) = 63.2% of steady state."
  },
  {
    "id": "Q7",
    "unit": "SET_A",
    "type": "mcq",
    "question": "Rise time in the dynamic characteristics of a sensor is typically defined as the time for the output to rise from:",
    "options": [
      "0% to 100% of the steady-state value",
      "5% to 95% of the steady-state value",
      "10% to 90% (or 95%) of the steady-state value",
      "50% to 100% of the steady-state value"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "10% to 90% (or 95%) of the steady-state value",
    "note": "Rise time is standardly defined as the time taken for output to rise from 10% to 90% of its final steady-state value."
  },
  {
    "id": "Q8",
    "unit": "SET_A",
    "type": "mcq",
    "question": "Settling time is defined as the time for the output to settle to within:",
    "options": [
      "50% of the steady-state value",
      "95% of the steady-state value",
      "A specified small percentage (e.g. 2%) of the steady-state value",
      "63.2% of the steady-state value"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "A specified small percentage (e.g. 2%) of the steady-state value",
    "note": "Response time is the time required for sensor output to reach 95% of its final steady-state value."
  },
  {
    "id": "Q9",
    "unit": "SET_A",
    "type": "mcq",
    "question": "Static characteristics of a transducer describe:",
    "options": [
      "The transient response between input change and output settling",
      "The behaviour of the sensor under ramp input conditions only",
      "The values given when steady-state conditions occur",
      "The frequency response to sinusoidal inputs"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "The values given when steady-state conditions occur",
    "note": "A potentiometer acts as a variable voltage divider: Vout = (x / L) * Vin, where x is displacement."
  },
  {
    "id": "Q10",
    "unit": "SET_A",
    "type": "mcq",
    "question": "For a strain gauge pressure transducer (range 70–1000 kPa, full-range output 40 mV), a pressure of 750 kPa gives an output of approximately:",
    "options": [
      "20 mV",
      "30 mV",
      "28.7 mV",
      "35 mV"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "28.7 mV",
    "note": "Push-pull potentiometer arrangement doubles sensitivity (2x) and eliminates common-mode temperature errors."
  },
  {
    "id": "Q11",
    "unit": "SET_B",
    "type": "mcq",
    "question": "Proximity sensors are distinguished from other displacement sensors because they:",
    "options": [
      "Provide high-resolution continuous displacement measurements",
      "Give on/off outputs when an object enters a defined critical distance",
      "Use laser interferometry for sub-micron accuracy",
      "Measure the velocity of a moving object directly"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Give on/off outputs when an object enters a defined critical distance",
    "note": "Strain gauge resistance change: ΔR/R = G * ε, where G is the gauge factor and ε is mechanical strain."
  },
  {
    "id": "Q12",
    "unit": "SET_B",
    "type": "mcq",
    "question": "A potentiometer used as a linear displacement sensor converts:",
    "options": [
      "Temperature into a resistance change",
      "Force into a proportional current",
      "Mechanical position or displacement into a proportional voltage output",
      "Pressure into an angular rotation"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "Mechanical position or displacement into a proportional voltage output",
    "note": "Capacitive displacement can vary plate separation (d), active plate area (A), or dielectric material (ε)."
  },
  {
    "id": "Q13",
    "unit": "SET_B",
    "type": "mcq",
    "question": "A reed switch is classified as a:",
    "options": [
      "Contact displacement sensor requiring physical contact",
      "Non-contact proximity switch that closes when a magnet approaches",
      "Capacitive sensor for fluid level detection",
      "Piezoelectric pressure sensor"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Non-contact proximity switch that closes when a magnet approaches",
    "note": "Differential capacitance configuration provides linear displacement output and cancels environmental drift."
  },
  {
    "id": "Q14",
    "unit": "SET_B",
    "type": "mcq",
    "question": "In washing machine water-level detection using a reed switch, the operating principle is:",
    "options": [
      "A pressure transducer at the base of the drum senses hydrostatic pressure",
      "A float carrying a magnet rises with the water level and triggers the reed switch at the set level",
      "An ultrasonic sensor inside the drum measures the distance to the water surface",
      "A resistive probe submerged in the water detects conductivity changes"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "A float carrying a magnet rises with the water level and triggers the reed switch at the set level",
    "note": "Inductive proximity sensors use high-frequency magnetic fields; metallic targets cause eddy current losses damping oscillation."
  },
  {
    "id": "Q15",
    "unit": "SET_B",
    "type": "mcq",
    "question": "An inductive proximity sensor can detect:",
    "options": [
      "Both metallic and non-metallic objects equally",
      "Metallic objects only, by the eddy-current loading effect on the coil oscillation",
      "Only ferromagnetic materials above 100 °C",
      "Clear transparent liquids at any distance"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Metallic objects only, by the eddy-current loading effect on the coil oscillation",
    "note": "Capacitive proximity sensors detect both metallic and non-metallic (plastics, liquids, wood) materials."
  },
  {
    "id": "Q16",
    "unit": "SET_B",
    "type": "mcq",
    "question": "The resolution of an incremental optical encoder with 120 slots per revolution is:",
    "options": [
      "1.5°",
      "3°",
      "6°",
      "12°"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "3°",
    "note": "Reed switches use ferromagnetic contacts hermetically sealed in glass, actuated by an external permanent magnet."
  },
  {
    "id": "Q17",
    "unit": "SET_B",
    "type": "mcq",
    "question": "An absolute encoder differs from an incremental encoder in that:",
    "options": [
      "It counts pulses from a datum and resets on power-off",
      "It gives the actual angular position at any instant without needing a datum reference",
      "It uses a single-slot disc for position feedback",
      "It requires an external counter to determine position"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "It gives the actual angular position at any instant without needing a datum reference",
    "note": "Optical encoders use an LED, patterned disc (code wheel), and photodetector to generate digital pulses."
  },
  {
    "id": "Q18",
    "unit": "SET_B",
    "type": "mcq",
    "question": "A transmissive (through-beam) photosensitive sensor detects an object by:",
    "options": [
      "Reflecting light off the object surface back to the detector",
      "The object physically interrupting a beam of light (or IR) between a separate transmitter and receiver",
      "Measuring the heat radiation emitted by the target",
      "Detecting the capacitance change near the object"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "The object physically interrupting a beam of light (or IR) between a separate transmitter and receiver",
    "note": "Incremental encoder resolution for N slots: Resolution = 360° / N per single revolution."
  },
  {
    "id": "Q19",
    "unit": "SET_B",
    "type": "mcq",
    "question": "The main advantage of ultrasonic proximity sensors over photoelectric sensors is:",
    "options": [
      "They are completely immune to all electromagnetic interference",
      "They can detect transparent or clear objects that may not reflect optical beams effectively",
      "They operate only at very short ranges below 5 mm",
      "They consume no electrical power in standby mode"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "They can detect transparent or clear objects that may not reflect optical beams effectively",
    "note": "Two quadrature tracks (A and B) shifted by 90° phase allow determining the clockwise or counter-clockwise direction."
  },
  {
    "id": "Q20",
    "unit": "SET_B",
    "type": "mcq",
    "question": "When selecting a proximity sensor for a target distance greater than 6 m, the recommended sensor type is:",
    "options": [
      "Inductive proximity sensor",
      "Reed switch",
      "Capacitive proximity sensor",
      "Photoelectric sensor"
    ],
    "answer": 3,
    "answerLetter": "D",
    "correctText": "Photoelectric sensor",
    "note": "Photoelectric beam sensors offer the longest sensing distance (>6m) compared to inductive/capacitive proximity."
  },
  {
    "id": "Q21",
    "unit": "SET_C",
    "type": "mcq",
    "question": "In an LVDT, the net output voltage is zero when the magnetic core is at the central position because:",
    "options": [
      "The primary coil is disconnected at that position",
      "Equal e.m.f.s are induced in both secondary coils, and since they are connected in opposition the net output is zero",
      "The magnetic core blocks all flux at the centre",
      "The two secondary coils are short-circuited at the centre"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Equal e.m.f.s are induced in both secondary coils, and since they are connected in opposition the net output is zero",
    "note": "At the null (center) position of an LVDT, equal voltages in both opposing secondary coils cancel out: Vout = 0 V."
  },
  {
    "id": "Q22",
    "unit": "SET_C",
    "type": "mcq",
    "question": "A phase-sensitive demodulator is used with the LVDT output because:",
    "options": [
      "The raw primary coil signal is too large for direct measurement",
      "The same output amplitude is produced for symmetrically opposite displacements, and the phase difference (180°) must be used to distinguish direction",
      "The secondary coils generate large noise that must be filtered",
      "The primary AC supply must be converted to DC first"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "The same output amplitude is produced for symmetrically opposite displacements, and the phase difference (180°) must be used to distinguish direction",
    "note": "A phase-sensitive demodulator resolves directional ambiguity by converting AC phase into a signed positive/negative DC voltage."
  },
  {
    "id": "Q23",
    "unit": "SET_C",
    "type": "mcq",
    "question": "A strain-gauge displacement sensor using cantilever/ring flexible elements typically covers linear displacements of:",
    "options": [
      "0.001 to 0.1 mm",
      "1 to 30 mm",
      "100 to 500 mm",
      "Over 1 metre"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "1 to 30 mm",
    "note": "Because the ferromagnetic core moves without touching coil bobbins, LVDTs have frictionless, virtually infinite life."
  },
  {
    "id": "Q24",
    "unit": "SET_C",
    "type": "mcq",
    "question": "A capacitive accelerometer in an automobile airbag system detects a crash by:",
    "options": [
      "Measuring the temperature spike during impact",
      "Detecting the differential capacitance change between fixed substrate plates and moving frame plates during deceleration",
      "Using a piezoelectric crystal voltage generated by the impact force",
      "Monitoring the inductance change of a coil mounted on the bumper"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Detecting the differential capacitance change between fixed substrate plates and moving frame plates during deceleration",
    "note": "A load cell typically consists of metal flexure beams with bonded strain gauges in a Wheatstone bridge."
  },
  {
    "id": "Q25",
    "unit": "SET_C",
    "type": "mcq",
    "question": "In the push-pull displacement sensor, using two potentiometers in opposition gives:",
    "options": [
      "Double sensitivity because both outputs add together",
      "A differential output where one resistance increases as the other decreases, improving linearity and doubling sensitivity",
      "A digital output pulse train proportional to displacement",
      "Temperature compensation by cancelling thermal drift"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "A differential output where one resistance increases as the other decreases, improving linearity and doubling sensitivity",
    "note": "Quarter-bridge uses 1 active strain gauge; full-bridge uses 4 active gauges providing 4x sensitivity and temperature compensation."
  },
  {
    "id": "Q26",
    "unit": "SET_C",
    "type": "mcq",
    "question": "A capacitive sensor used as a humidity sensor detects moisture because:",
    "options": [
      "Water droplets physically bridge the two capacitor plates",
      "One permeable capacitor plate absorbs water, changing the dielectric constant and thus the capacitance",
      "Water increases the plate area of the capacitor",
      "Humidity changes the supply voltage to the sensor"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "One permeable capacitor plate absorbs water, changing the dielectric constant and thus the capacitance",
    "note": "Piezoelectric materials (e.g. Quartz, PZT) generate electric charge/voltage when subjected to mechanical stress."
  },
  {
    "id": "Q27",
    "unit": "SET_C",
    "type": "mcq",
    "question": "An RVDT (Rotary Variable Differential Transformer) is used to measure:",
    "options": [
      "Linear displacement up to 500 mm",
      "Angular rotation (rotational displacement)",
      "Fluid flow velocity",
      "Thermal expansion of metals"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Angular rotation (rotational displacement)",
    "note": "Because charge leaks away across internal resistance, piezoelectric sensors cannot measure static/constant forces."
  },
  {
    "id": "Q28",
    "unit": "SET_C",
    "type": "mcq",
    "question": "The inductive proximity sensor detection circuit triggers the output when:",
    "options": [
      "The oscillating magnetic field increases to a maximum",
      "The eddy-current loading of a nearby metallic object reduces the oscillating magnetic field current to a sufficient level",
      "The target comes within 1 mm of the sensor face only",
      "A non-metallic object approaches the coil"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "The eddy-current loading of a nearby metallic object reduces the oscillating magnetic field current to a sufficient level",
    "note": "Piezoelectric accelerometers measure force exerted by an internal seismic mass (F = m * a) onto a piezoelectric element."
  },
  {
    "id": "Q29",
    "unit": "SET_C",
    "type": "mcq",
    "question": "The inner track of an incremental optical encoder disc with one hole is used to:",
    "options": [
      "Determine the direction of rotation",
      "Set the resolution of the encoder",
      "Provide a home/datum (index) position reference",
      "Count the total number of revolutions"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "Provide a home/datum (index) position reference",
    "note": "Gauge pressure measures pressure relative to local atmospheric pressure (P_gauge = P_abs - P_atm)."
  },
  {
    "id": "Q30",
    "unit": "SET_C",
    "type": "mcq",
    "question": "The LVDT is described as an ideal displacement sensor for many applications because:",
    "options": [
      "It produces very high output voltages requiring no amplification",
      "There is no mechanical contact between the moving core and the coil assembly, giving virtually infinite mechanical life and no friction",
      "Its output is always a digital signal",
      "It can only measure angular displacement"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "There is no mechanical contact between the moving core and the coil assembly, giving virtually infinite mechanical life and no friction",
    "note": "Absolute pressure is referenced to a perfect vacuum (zero absolute pressure)."
  },
  {
    "id": "Q31",
    "unit": "SET_D",
    "type": "mcq",
    "question": "In the Hall effect formula V = K_H × (BI/t), the variable \"t\" represents:",
    "options": [
      "The time duration of measurement",
      "The operating temperature",
      "The thickness of the conductive plate",
      "The transmittance of the sensor material"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "The thickness of the conductive plate",
    "note": "Hall effect: when magnetic flux B is perpendicular to current I in a conductor, a transverse Hall voltage VH is generated."
  },
  {
    "id": "Q32",
    "unit": "SET_D",
    "type": "mcq",
    "question": "When a constant current source is used with a Hall effect sensor, the Hall voltage becomes a direct measure of:",
    "options": [
      "The electric current magnitude",
      "The magnetic flux density (B)",
      "The electric field intensity",
      "The sensor temperature"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "The magnetic flux density (B)",
    "note": "Hall voltage formula: VH = (KH * B * I) / t, inversely proportional to plate thickness t."
  },
  {
    "id": "Q33",
    "unit": "SET_D",
    "type": "mcq",
    "question": "The Schmitt trigger in a digital-output Hall effect sensor serves to:",
    "options": [
      "Convert the Hall voltage from analogue to digital",
      "Provide hysteresis to prevent false triggering caused by minor fluctuations in the input magnetic field",
      "Regulate the supply voltage to the Hall element",
      "Amplify the output to drive high-power loads"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Provide hysteresis to prevent false triggering caused by minor fluctuations in the input magnetic field",
    "note": "Variable reluctance tachogenerators produce an AC voltage whose amplitude and frequency are proportional to angular speed."
  },
  {
    "id": "Q34",
    "unit": "SET_D",
    "type": "mcq",
    "question": "A magneto-resistive sensor differs from a Hall effect sensor in that it:",
    "options": [
      "Produces a voltage change proportional to field strength",
      "Gives a resistance change with the field applied perpendicular to the sensor plane, and its output is independent of magnet polarity",
      "Can measure both field strength and polarity simultaneously",
      "Uses a Wheatstone bridge for force measurement"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Gives a resistance change with the field applied perpendicular to the sensor plane, and its output is independent of magnet polarity",
    "note": "Optical tachometers count light reflections/interruptions per unit time from rotating shaft markers."
  },
  {
    "id": "Q35",
    "unit": "SET_D",
    "type": "mcq",
    "question": "Magneto-resistive sensors are typically used for:",
    "options": [
      "Precise measurement of magnetic field strength",
      "Position detection – indicating whether an element (e.g. gear tooth, door) is present or absent",
      "Measuring angular velocity with high accuracy",
      "Controlling motor drive current"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Position detection – indicating whether an element (e.g. gear tooth, door) is present or absent",
    "note": "In ultrasonic distance sensors (HC-SR04): Distance = (Echo Time * Speed of Sound) / 2."
  },
  {
    "id": "Q36",
    "unit": "SET_D",
    "type": "mcq",
    "question": "The variable reluctance tachogenerator produces an output e.m.f. by:",
    "options": [
      "A Hall effect chip mounted on the rotating shaft",
      "A toothed ferromagnetic wheel rotating past a pick-up coil wound on a permanent magnet, periodically changing the air gap and hence the flux linkage",
      "A capacitive sensor measuring shaft rotation",
      "A reed switch activated by teeth on the wheel"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "A toothed ferromagnetic wheel rotating past a pick-up coil wound on a permanent magnet, periodically changing the air gap and hence the flux linkage",
    "note": "Speed of sound in air at room temperature is approximately 340 m/s (0.034 cm/μs)."
  },
  {
    "id": "Q37",
    "unit": "SET_D",
    "type": "mcq",
    "question": "For a tachogenerator with a wheel of n teeth rotating at angular velocity ω, the peak (maximum) e.m.f. is proportional to:",
    "options": [
      "n alone",
      "ω alone",
      "n × ω (and the coil turns N and flux amplitude Φ_a)",
      "1 / (n × ω)"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "n × ω (and the coil turns N and flux amplitude Φ_a)",
    "note": "Hydrostatic pressure at depth h is P = ρ * g * h, measured using pressure transducers at vessel base."
  },
  {
    "id": "Q38",
    "unit": "SET_D",
    "type": "mcq",
    "question": "An alternative to using the peak e.m.f. of a tachogenerator to measure angular velocity is to:",
    "options": [
      "Measure the DC component of the output",
      "Use a pulse-shaping signal conditioner to convert the output into a pulse train and count pulses over a fixed time interval",
      "Integrate the e.m.f. over one revolution",
      "Measure the phase angle of the AC output"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Use a pulse-shaping signal conditioner to convert the output into a pulse train and count pulses over a fixed time interval",
    "note": "Differential pressure (DP) cells measure liquid level in closed pressurized tanks by subtracting top gas pressure."
  },
  {
    "id": "Q39",
    "unit": "SET_D",
    "type": "mcq",
    "question": "A rotary magnetic encoder (Hall effect type) achieves position detection by using:",
    "options": [
      "A transparent disc with optical slots and photodetectors",
      "A magnetic disc with alternating North and South poles that trigger a Hall effect sensor as the disc rotates",
      "A reed switch activated by a single magnet on the shaft",
      "An LVDT core attached to the rotating shaft"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "A magnetic disc with alternating North and South poles that trigger a Hall effect sensor as the disc rotates",
    "note": "Capacitive level sensors measure capacitance change as liquid (with dielectric constant ε > 1) rises between electrode plates."
  },
  {
    "id": "Q40",
    "unit": "SET_D",
    "type": "mcq",
    "question": "An AC tachogenerator (rotor-type) measures angular velocity using:",
    "options": [
      "The frequency or amplitude of the AC e.m.f. induced in a rotor coil rotating in a stationary magnetic field",
      "A strain gauge attached to the rotor shaft",
      "The capacitance change between rotor and stator plates",
      "The Hall voltage produced in the rotating conductor"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "The frequency or amplitude of the AC e.m.f. induced in a rotor coil rotating in a stationary magnetic field",
    "note": "AC tachogenerators generate an AC e.m.f. in rotor coils rotating within a stationary magnetic field."
  },
  {
    "id": "Q41",
    "unit": "SET_E",
    "type": "mcq",
    "question": "A strain gauge load cell measures force by:",
    "options": [
      "Measuring the thermal expansion of a metal column under load",
      "Monitoring the electrical resistance change of strain gauges bonded to an elastic element deformed by the applied force",
      "Using a capacitive plate to detect bending of a beam",
      "Measuring the magnetic flux change in a ferromagnetic member"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Monitoring the electrical resistance change of strain gauges bonded to an elastic element deformed by the applied force",
    "note": "Diaphragm pressure transducers use flexible corrugated membranes that deflect under pressure, measured with strain gauges."
  },
  {
    "id": "Q42",
    "unit": "SET_E",
    "type": "mcq",
    "question": "The signal conditioning circuit of a strain gauge load cell must compensate for temperature because:",
    "options": [
      "Strain gauges only work above 20 °C",
      "Temperature also causes resistance changes in the strain gauges, which would be misinterpreted as force-induced strain",
      "The elastic element loses stiffness rapidly with temperature",
      "The supply voltage changes with temperature"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Temperature also causes resistance changes in the strain gauges, which would be misinterpreted as force-induced strain",
    "note": "Bellows elements provide larger displacement than diaphragms for low-to-moderate pressure ranges."
  },
  {
    "id": "Q43",
    "unit": "SET_E",
    "type": "mcq",
    "question": "Absolute pressure is defined as:",
    "options": [
      "Pressure measured relative to atmospheric (barometric) pressure",
      "The difference in pressure between two points in a system",
      "Pressure measured relative to zero pressure (perfect vacuum)",
      "The maximum safe pressure rating of a vessel"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "Pressure measured relative to zero pressure (perfect vacuum)",
    "note": "Bourdon tubes uncoil under pressure; tip displacement is mechanically linked or coupled to an LVDT."
  },
  {
    "id": "Q44",
    "unit": "SET_E",
    "type": "mcq",
    "question": "Corrugations added to a diaphragm pressure sensor result in:",
    "options": [
      "Reduced mechanical sensitivity",
      "Greater deflection sensitivity for a given pressure difference, due to increased flexibility",
      "A higher minimum detectable pressure",
      "Digital output from the diaphragm"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Greater deflection sensitivity for a given pressure difference, due to increased flexibility",
    "note": "Force-Sensing Resistors (FSR) exhibit inverse relationship: electrical resistance decreases as applied compressive force increases."
  },
  {
    "id": "Q45",
    "unit": "SET_E",
    "type": "mcq",
    "question": "Capsules in pressure sensing offer greater sensitivity than a single diaphragm because:",
    "options": [
      "They use a thicker material to withstand higher pressure",
      "A capsule is essentially two corrugated diaphragms combined, giving cumulative deflection sensitivity",
      "They incorporate electronic amplifiers internally",
      "They remove the need for strain gauges"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "A capsule is essentially two corrugated diaphragms combined, giving cumulative deflection sensitivity",
    "note": "FSRs are commonly interfaced using a voltage divider circuit with a fixed pull-down resistor."
  },
  {
    "id": "Q46",
    "unit": "SET_E",
    "type": "mcq",
    "question": "A piezoelectric accelerometer measures vibration acceleration because:",
    "options": [
      "A capacitive plate detects the movement of a seismic mass",
      "The vibration transmits acceleration to a seismic mass which applies a proportional force to a piezoelectric crystal, generating a charge/voltage proportional to acceleration",
      "A bimetallic strip bends proportionally to vibration amplitude",
      "A strain gauge on a cantilever detects the seismic mass deflection"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "The vibration transmits acceleration to a seismic mass which applies a proportional force to a piezoelectric crystal, generating a charge/voltage proportional to acceleration",
    "note": "Load cell sensitivity is specified in mV/V at rated capacity (e.g. 2 mV/V at 10V excitation = 20 mV full scale)."
  },
  {
    "id": "Q47",
    "unit": "SET_E",
    "type": "mcq",
    "question": "The reverse piezoelectric effect is used to:",
    "options": [
      "Convert mechanical vibration into an electrical voltage",
      "Generate ultrasonic waves when a high-frequency alternating voltage is applied to the piezoelectric crystal",
      "Measure static forces using a crystal",
      "Produce a Hall voltage in a magnetic field"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Generate ultrasonic waves when a high-frequency alternating voltage is applied to the piezoelectric crystal",
    "note": "Piezoresistive pressure sensors integrate semiconductor strain gauges diffused directly into silicon diaphragms."
  },
  {
    "id": "Q48",
    "unit": "SET_E",
    "type": "mcq",
    "question": "A Force-Sensitive Resistor (FSR) operates on the principle that:",
    "options": [
      "Its resistance increases when more force is applied to its surface",
      "The applied force presses the conductive film against the resistive layer; greater contact area means lower sensor resistance",
      "The piezoelectric material generates a charge proportional to force",
      "A strain gauge bonded to a flexible film changes resistance under force"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "The applied force presses the conductive film against the resistive layer; greater contact area means lower sensor resistance",
    "note": "Seismic mass in accelerometers converts acceleration into mechanical force (Newton second law: F = m * a)."
  },
  {
    "id": "Q49",
    "unit": "SET_E",
    "type": "mcq",
    "question": "For simple force-to-voltage conversion, the FSR is connected:",
    "options": [
      "In series with a current source to give a proportional current output",
      "In a voltage divider with a fixed resistor of similar resistance; the output is taken across the fixed resistor",
      "Directly to a microcontroller digital pin without any resistor",
      "In parallel with a capacitor to integrate the force signal"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "In a voltage divider with a fixed resistor of similar resistance; the output is taken across the fixed resistor",
    "note": "Low-pass filtering after demodulation removes high-frequency carrier ripple from LVDT output."
  },
  {
    "id": "Q50",
    "unit": "SET_E",
    "type": "mcq",
    "question": "The main drawback of the FSR sensor is:",
    "options": [
      "Its inability to work below 10 N applied force",
      "The plastic spacer's slow re-inflation after compression, causing a slow drift of approximately 5% back to the initial resistance value over several seconds",
      "Its resistance being too high to measure with standard circuits",
      "Its incompatibility with microcontroller analogue inputs"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "The plastic spacer's slow re-inflation after compression, causing a slow drift of approximately 5% back to the initial resistance value over several seconds",
    "note": "Differential pressure cell high-pressure port connects to vessel bottom, low-pressure port to vapor space above."
  },
  {
    "id": "Q51",
    "unit": "SET_F",
    "type": "mcq",
    "question": "An indirect method of liquid level measurement using a load cell works by:",
    "options": [
      "Measuring the pressure at the base of the vessel",
      "Monitoring the total weight of the vessel plus liquid; changes in liquid height produce proportional weight changes (W = Ahρg)",
      "Detecting the capacitance change between two vertical plates in the vessel",
      "Using a float to move an LVDT core"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Monitoring the total weight of the vessel plus liquid; changes in liquid height produce proportional weight changes (W = Ahρg)",
    "note": "RTD (Resistance Temperature Detector) uses pure metals (primarily Platinum Pt100) with a positive temperature coefficient."
  },
  {
    "id": "Q52",
    "unit": "SET_F",
    "type": "mcq",
    "question": "In a float-based liquid level sensor, the float displacement is converted to a voltage output by:",
    "options": [
      "A strain gauge attached directly to the float",
      "A lever arm that rotates a potentiometer wiper or displaces an LVDT core proportionally to the liquid height",
      "A differential pressure cell beneath the float",
      "A thermistor mounted on the float"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "A lever arm that rotates a potentiometer wiper or displaces an LVDT core proportionally to the liquid height",
    "note": "Pt100 RTD standard specification: exactly 100.0 Ω resistance at 0°C."
  },
  {
    "id": "Q53",
    "unit": "SET_F",
    "type": "mcq",
    "question": "For a closed vessel, liquid level measurement using a differential pressure cell monitors:",
    "options": [
      "The pressure at the top of the liquid only",
      "The difference in pressure between the base of the vessel and the gas/air above the liquid surface",
      "The absolute pressure at the base relative to perfect vacuum",
      "The weight of the vessel using load cells on the base"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "The difference in pressure between the base of the vessel and the gas/air above the liquid surface",
    "note": "RTD resistance-temperature relation: Rt = R0 * (1 + α * t), highly linear over wide ranges."
  },
  {
    "id": "Q54",
    "unit": "SET_F",
    "type": "mcq",
    "question": "A bimetallic strip thermostat operates because:",
    "options": [
      "Both metal strips have identical thermal expansion coefficients",
      "The two bonded metals have different thermal expansion coefficients, so the composite strip bends on temperature change, making or breaking a contact",
      "One metal becomes ferromagnetic only at elevated temperatures",
      "The strip changes electrical resistance proportionally to temperature"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "The two bonded metals have different thermal expansion coefficients, so the composite strip bends on temperature change, making or breaking a contact",
    "note": "NTC (Negative Temperature Coefficient) thermistors exhibit decreasing resistance as temperature increases."
  },
  {
    "id": "Q55",
    "unit": "SET_F",
    "type": "mcq",
    "question": "The RTD (Resistance Temperature Detector) formula R_t = R_0(1 + at) indicates that over a limited range:",
    "options": [
      "Resistance decreases non-linearly with increasing temperature",
      "Resistance increases approximately linearly with temperature, where a is the temperature coefficient",
      "Resistance is inversely proportional to temperature",
      "Resistance is independent of the material used"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Resistance increases approximately linearly with temperature, where a is the temperature coefficient",
    "note": "Thermistor Steinhart-Hart / Beta equation is non-linear exponential: R(T) = R0 * exp(β * (1/T - 1/T0))."
  },
  {
    "id": "Q56",
    "unit": "SET_F",
    "type": "mcq",
    "question": "Which metal among Nickel, Copper, and Platinum gives the highest R_t/R_0 ratio at elevated temperatures (according to RTD characteristic curves)?",
    "options": [
      "Platinum",
      "Copper",
      "Nickel",
      "All three are identical above 400 °C"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "Nickel",
    "note": "Thermocouples operate on the Seebeck effect: temperature difference between two junctions creates an e.m.f. voltage."
  },
  {
    "id": "Q57",
    "unit": "SET_F",
    "type": "mcq",
    "question": "A key disadvantage of NTC thermistors compared to RTDs is:",
    "options": [
      "They are larger and less robust than RTDs",
      "Their resistance-temperature relationship is highly non-linear, requiring linearisation",
      "They respond more slowly to temperature changes",
      "They are more expensive than platinum RTDs"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Their resistance-temperature relationship is highly non-linear, requiring linearisation",
    "note": "Thermocouple output voltage: E = a*t + b*t², requiring cold-junction compensation (CJC)."
  },
  {
    "id": "Q58",
    "unit": "SET_F",
    "type": "mcq",
    "question": "PTC thermistors are used as motor overload protection because:",
    "options": [
      "Their resistance decreases sharply when the motor overheats, cutting the current",
      "Their resistance increases dramatically over a small temperature range, acting as an effective thermal cutoff switch",
      "They generate an e.m.f. proportional to motor current",
      "They act as varistors, clamping the voltage during overloads"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Their resistance increases dramatically over a small temperature range, acting as an effective thermal cutoff switch",
    "note": "Type K (Chromel-Alumel) is the most widely used industrial general-purpose thermocouple."
  },
  {
    "id": "Q59",
    "unit": "SET_F",
    "type": "mcq",
    "question": "A thermocouple generates an e.m.f. because:",
    "options": [
      "One metal expands more thermally than the other",
      "Two dissimilar metals joined at a junction develop a potential difference that depends on the junction temperature",
      "One metal becomes magnetic and the other does not",
      "Electrons are blocked at the junction, creating a charge difference"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Two dissimilar metals joined at a junction develop a potential difference that depends on the junction temperature",
    "note": "Bimetallic strips bond two metals with different thermal expansion coefficients, causing bending upon heating."
  },
  {
    "id": "Q60",
    "unit": "SET_F",
    "type": "mcq",
    "question": "The thermocouple output e.m.f. equation E = at + bt² implies:",
    "options": [
      "The output is perfectly linear with temperature t",
      "There is a slight non-linearity due to the bt² quadratic term",
      "The output decreases with increasing temperature",
      "The output is independent of the metal types used"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "There is a slight non-linearity due to the bt² quadratic term",
    "note": "The thermocouple equation E = at + bt² has a quadratic term (bt²) representing slight non-linearity."
  },
  {
    "id": "Q71",
    "unit": "SET_G",
    "type": "mcq",
    "question": "A photodiode used as a light sensor is connected in:",
    "options": [
      "Forward bias, where forward current increases with illumination",
      "Reverse bias, where the normally negligible reverse (dark) current increases proportionally with light intensity",
      "Alternating bias to allow both positive and negative light signals",
      "Zero bias with a pull-up resistor only"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Reverse bias, where the normally negligible reverse (dark) current increases proportionally with light intensity",
    "note": "LDR (Light Dependent Resistor / Photoresistor) resistance decreases significantly when exposed to incident light."
  },
  {
    "id": "Q72",
    "unit": "SET_G",
    "type": "mcq",
    "question": "The dark current in a photodiode refers to:",
    "options": [
      "The photocurrent generated under maximum illumination",
      "The very small reverse current flowing when no light is incident on the junction",
      "The current generated by thermal noise at elevated temperatures",
      "The current that flows under forward-bias conditions"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "The very small reverse current flowing when no light is incident on the junction",
    "note": "Photodiodes operate in reverse bias mode; light-generated electron-hole pairs increase reverse leakage current."
  },
  {
    "id": "Q73",
    "unit": "SET_G",
    "type": "mcq",
    "question": "A phototransistor connected in Darlington configuration provides:",
    "options": [
      "Lower sensitivity with reduced noise",
      "A much higher current gain, resulting in significantly greater collector current for a given light intensity",
      "A purely digital (on/off) output only",
      "Temperature compensation for the base-emitter junction"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "A much higher current gain, resulting in significantly greater collector current for a given light intensity",
    "note": "Phototransistors provide internal current gain (amplification), offering higher light sensitivity than photodiodes."
  },
  {
    "id": "Q74",
    "unit": "SET_G",
    "type": "mcq",
    "question": "In a thermodiode (e.g. LM35), when constant current flows through the p-n junction, the measured electrical quantity that varies with temperature is:",
    "options": [
      "The forward current",
      "The reverse breakdown voltage",
      "The voltage across the junction, which has a linear dependence on temperature",
      "The capacitance of the depletion layer"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "The voltage across the junction, which has a linear dependence on temperature",
    "note": "Photovoltaic solar cells convert optical photon energy directly into electrical energy without external power."
  },
  {
    "id": "Q75",
    "unit": "SET_G",
    "type": "mcq",
    "question": "A thermodiode temperature sensor has an advantage over a thermistor because:",
    "options": [
      "It has a lower cost of manufacture",
      "It is available in larger physical sizes",
      "It has a linear response with temperature, unlike the non-linear thermistor",
      "It can operate at higher temperatures than any thermistor"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "It has a linear response with temperature, unlike the non-linear thermistor",
    "note": "LM35 temperature sensor produces a calibrated linear analog output of 10 mV/°C (e.g. 250 mV at 25°C)."
  },
  {
    "id": "Q76",
    "unit": "SET_G",
    "type": "mcq",
    "question": "In a thermotransistor (e.g. for temperature sensing), the temperature-sensitive quantity that is measured is:",
    "options": [
      "The collector supply voltage",
      "The emitter current under constant base voltage",
      "The base-emitter junction voltage, which is temperature-dependent",
      "The frequency of oscillation of the transistor circuit"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "The base-emitter junction voltage, which is temperature-dependent",
    "note": "MAX6675 is a specialized cold-junction compensated K-thermocouple-to-digital converter using SPI communication."
  },
  {
    "id": "Q77",
    "unit": "SET_G",
    "type": "mcq",
    "question": "Mechanical switches are specified by \"poles\" and \"throws.\" Poles are defined as:",
    "options": [
      "The number of separate circuits that can be controlled by one switching action",
      "The number of independent throw positions available to each contact",
      "The maximum current rating of the switch contacts",
      "The physical number of terminals on the switch body"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "The number of separate circuits that can be controlled by one switching action",
    "note": "SPST switch stands for Single Pole, Single Throw (1 circuit, 1 ON/OFF contact position)."
  },
  {
    "id": "Q78",
    "unit": "SET_G",
    "type": "mcq",
    "question": "In the standard switch interface circuit (pull-up resistor circuit), when the switch is CLOSED, the output voltage is:",
    "options": [
      "Equal to the supply voltage",
      "Approximately zero (since Rs ≈ 0 when closed, and output is across Rs)",
      "Half the supply voltage",
      "Negative"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Approximately zero (since Rs ≈ 0 when closed, and output is across Rs)",
    "note": "SPDT switch stands for Single Pole, Double Throw (1 common terminal switching between 2 alternate contacts)."
  },
  {
    "id": "Q79",
    "unit": "SET_G",
    "type": "mcq",
    "question": "A limit switch is best described as:",
    "options": [
      "An electronic sensor measuring precise linear displacement continuously",
      "A mechanical switch actuated by the physical contact of a moving object to indicate when it has reached its displacement limit",
      "A capacitive sensor that detects the proximity of non-metallic objects",
      "A current-controlled switch for motor speed regulation"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "A mechanical switch actuated by the physical contact of a moving object to indicate when it has reached its displacement limit",
    "note": "DPDT switch stands for Double Pole, Double Throw (2 independent circuits switched simultaneously between 2 positions)."
  },
  {
    "id": "Q80",
    "unit": "SET_G",
    "type": "mcq",
    "question": "The silicon diaphragm pressure sensor is used in automobile electronic systems to monitor:",
    "options": [
      "Tyre pressure from the outside",
      "Engine coolant temperature",
      "Inlet manifold air pressure (MAP sensor)",
      "Fuel injection timing"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "Inlet manifold air pressure (MAP sensor)",
    "note": "Schmitt trigger introduces hysteresis to eliminate noise chatter and generate clean digital square pulses."
  },
  {
    "id": "Q61",
    "unit": "SET_H",
    "type": "mcq",
    "question": "The term \"mechatronics\" was coined by which company in the 1970s?",
    "options": [
      "Toyota Motor Corporation",
      "Yasakawa Electric Company",
      "Mitsubishi Heavy Industries",
      "Sony Corporation"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Yasakawa Electric Company",
    "note": "A mechatronics system synergistically integrates mechanical, electrical, computer, and control engineering."
  },
  {
    "id": "Q62",
    "unit": "SET_H",
    "type": "mcq",
    "question": "Mechatronics is best defined as:",
    "options": [
      "The study of mechanical design principles for robots",
      "The application of electronics and computer technology to control the motions of mechanical systems",
      "A branch of electronics focused on circuit design only",
      "The use of hydraulic systems in manufacturing"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "The application of electronics and computer technology to control the motions of mechanical systems",
    "note": "The four key elements of mechatronics: Sensors, Actuators, Controllers, and Mechanical/Electrical components."
  },
  {
    "id": "Q63",
    "unit": "SET_H",
    "type": "mcq",
    "question": "Which of the following lists correctly identifies the four key elements of a mechatronics system?",
    "options": [
      "Sensors, resistors, capacitors, and inductors",
      "Sensors, actuators, controllers, and mechanical/electrical components",
      "Microprocessors, displays, motors, and gears",
      "Software, hardware, firmware, and databases"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Sensors, actuators, controllers, and mechanical/electrical components",
    "note": "An actuator converts electrical control signals into physical mechanical motion, force, or fluid power."
  },
  {
    "id": "Q64",
    "unit": "SET_H",
    "type": "mcq",
    "question": "Control is defined as the process of:",
    "options": [
      "Designing mechanical components for a system",
      "Measuring physical quantities with high accuracy",
      "Altering, manually or automatically, the performance of a system to a desired outcome",
      "Converting one form of energy into another"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "Altering, manually or automatically, the performance of a system to a desired outcome",
    "note": "Four main actuator categories: Electric, Hydraulic, Pneumatic, and Mechanical."
  },
  {
    "id": "Q65",
    "unit": "SET_H",
    "type": "mcq",
    "question": "A transducer is defined as a device that:",
    "options": [
      "Measures a physical quantity and stores the data",
      "Converts one form of energy into another form of energy",
      "Amplifies electrical signals for further processing",
      "Controls the speed of a motor using feedback"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Converts one form of energy into another form of energy",
    "note": "Microcontrollers integrate a microprocessor core (CPU), RAM/ROM memory, and I/O peripherals on one IC."
  },
  {
    "id": "Q66",
    "unit": "SET_H",
    "type": "mcq",
    "question": "An actuator is a component responsible for:",
    "options": [
      "Measuring physical variables and converting them to electrical signals",
      "Moving or controlling a mechanism by converting electrical/hydraulic/pneumatic power into physical motion",
      "Processing sensor data inside a microcontroller",
      "Storing program instructions for a controller"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Moving or controlling a mechanism by converting electrical/hydraulic/pneumatic power into physical motion",
    "note": "Arduino UNO uses the ATmega328P 8-bit microcontroller running at 16 MHz with 14 digital I/O and 6 analog inputs."
  },
  {
    "id": "Q67",
    "unit": "SET_H",
    "type": "mcq",
    "question": "Which of the following is NOT one of the four main types of actuators?",
    "options": [
      "Hydraulic",
      "Pneumatic",
      "Electric",
      "Optical"
    ],
    "answer": 3,
    "answerLetter": "D",
    "correctText": "Optical",
    "note": "Open-loop systems lack feedback; closed-loop systems measure output via sensors and feed it back to correct errors."
  },
  {
    "id": "Q68",
    "unit": "SET_H",
    "type": "mcq",
    "question": "A microcontroller integrates which three major components on a single chip?",
    "options": [
      "Sensor, actuator, and display",
      "Microprocessor (MPU), memory, and I/O ports",
      "ADC, DAC, and power supply",
      "Clock, bus, and interrupt controller only"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Microprocessor (MPU), memory, and I/O ports",
    "note": "Active suspension uses road sensors, ECU controller, and hydraulic/pneumatic actuators to dynamically stabilize vehicles."
  },
  {
    "id": "Q69",
    "unit": "SET_H",
    "type": "mcq",
    "question": "Arduino is described as an open-source electronics platform because it:",
    "options": [
      "Is manufactured without patents and sold freely",
      "Integrates hardware and software to allow reading inputs and producing outputs, with boards that can be programmed with open instructions",
      "Uses only open-source operating systems",
      "Is powered exclusively by solar energy"
    ],
    "answer": 1,
    "answerLetter": "B",
    "correctText": "Integrates hardware and software to allow reading inputs and producing outputs, with boards that can be programmed with open instructions",
    "note": "Arduino is an open-source hardware/software prototyping platform with extensible C/C++ libraries and open designs."
  },
  {
    "id": "Q70",
    "unit": "SET_H",
    "type": "mcq",
    "question": "According to the key elements of mechatronics study, which of the following is NOT one of the five specialty areas?",
    "options": [
      "Physical Systems Modeling",
      "Sensors and Actuators",
      "Fluid Mechanics and Thermodynamics",
      "Software and Data Acquisition"
    ],
    "answer": 2,
    "answerLetter": "C",
    "correctText": "Fluid Mechanics and Thermodynamics",
    "note": "The 5 specialty areas are: Physical Systems Modeling, Sensors & Actuators, Signals & Systems, Computers & Logic, Software & DAQ."
  },
  {
    "id": "FILL_Q1",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "The time constant of a sensor is the time for its output to reach _______ % of the final steady- state value after a step input is applied.",
    "options": [
      "63.2",
      "50.0",
      "95.0",
      "99.3"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "63.2",
    "filledSentence": "The time constant of a sensor is the time for its output to reach 【63.2】 % of the final steady- state value after a step input is applied.",
    "note": "الإجابة النموذجية: 63.2"
  },
  {
    "id": "FILL_Q2",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "The response time of a sensor is defined as the time elapsed after a step input is applied until the output reaches _______ % of the input value.",
    "options": [
      "95",
      "63.2",
      "50",
      "80"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "95",
    "filledSentence": "The response time of a sensor is defined as the time elapsed after a step input is applied until the output reaches 【95】 % of the input value.",
    "note": "الإجابة النموذجية: 95"
  },
  {
    "id": "FILL_Q3",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "The RTD resistance formula is R_t = R_0(1 + _______), where the symbol 'a' represents the _______ coefficient of the metal.",
    "options": [
      "at ; temperature",
      "bt² ; voltage",
      "αt ; pressure",
      "kt ; resistance"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "at ; temperature",
    "filledSentence": "The RTD resistance formula is R_t = R_0(1 + 【at】), where the symbol 'a' represents the 【temperature】 coefficient of the metal.",
    "note": "الإجابة النموذجية: at ; temperature"
  },
  {
    "id": "FILL_Q4",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "The thermocouple e.m.f. equation is E = _______, showing that the output has a slight _______ component.",
    "options": [
      "at + bt² ; quadratic (non-linear)",
      "at ; linear",
      "a/t ; hyperbolic",
      "a * exp(b/t) ; exponential"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "at + bt² ; quadratic (non-linear)",
    "filledSentence": "The thermocouple e.m.f. equation is E = 【at + bt²】, showing that the output has a slight 【quadratic (non-linear)】 component.",
    "note": "الإجابة النموذجية: at + bt² ; quadratic (non-linear)"
  },
  {
    "id": "FILL_Q5",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "A magneto-resistive sensor gives a _______ change as its output, whereas a Hall effect sensor gives a _______ change.",
    "options": [
      "resistance ; voltage",
      "voltage ; current",
      "capacitance ; inductance",
      "current ; flux"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "resistance ; voltage",
    "filledSentence": "A magneto-resistive sensor gives a 【resistance】 change as its output, whereas a Hall effect sensor gives a 【voltage】 change.",
    "note": "الإجابة النموذجية: resistance ; voltage"
  },
  {
    "id": "FILL_Q6",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "In the LVDT, the central coil is the _______ coil, and the two identical outer coils are connected so that their outputs _______ each other.",
    "options": [
      "primary ; oppose",
      "secondary ; reinforce",
      "excitation ; cancel",
      "center ; multiply"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "primary ; oppose",
    "filledSentence": "In the LVDT, the central coil is the 【primary】 coil, and the two identical outer coils are connected so that their outputs 【oppose】 each other.",
    "note": "الإجابة النموذجية: primary ; oppose"
  },
  {
    "id": "FILL_Q7",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "A reed switch consists of two magnetic contacts sealed in a _______ tube. It closes when a _______ is brought close to it.",
    "options": [
      "glass ; magnet",
      "plastic ; current",
      "ceramic ; coil",
      "copper ; capacitor"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "glass ; magnet",
    "filledSentence": "A reed switch consists of two magnetic contacts sealed in a 【glass】 tube. It closes when a 【magnet】 is brought close to it.",
    "note": "الإجابة النموذجية: glass ; magnet"
  },
  {
    "id": "FILL_Q8",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "An incremental optical encoder with N slots per revolution has an angular resolution of _______ degrees.",
    "options": [
      "360 / N",
      "180 / N",
      "360 × N",
      "N / 360"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "360 / N",
    "filledSentence": "An incremental optical encoder with N slots per revolution has an angular resolution of 【360 / N】 degrees.",
    "note": "الإجابة النموذجية: 360 / N"
  },
  {
    "id": "FILL_Q9",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "For the NTC thermistor, resistance _______ as temperature increases, and this change is highly _______.",
    "options": [
      "decreases ; non-linear",
      "increases ; linear",
      "decreases ; linear",
      "remains constant ; exponential"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "decreases ; non-linear",
    "filledSentence": "For the NTC thermistor, resistance 【decreases】 as temperature increases, and this change is highly 【non-linear】.",
    "note": "الإجابة النموذجية: decreases ; non-linear"
  },
  {
    "id": "FILL_Q10",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "The HC-SR04 ultrasonic sensor has _______ pins. The formula to calculate distance is: Distance = (duration / _______) × _______.",
    "options": [
      "4 ; 2 ; speed of sound (≈ 0.034 cm/μs)",
      "3 ; 4 ; speed of light",
      "5 ; 2 ; frequency",
      "4 ; 1 ; wavelength"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "4 ; 2 ; speed of sound (≈ 0.034 cm/μs)",
    "filledSentence": "The HC-SR04 ultrasonic sensor has 【4】 pins. The formula to calculate distance is: Distance = (duration / 【2】) × 【speed of sound (≈ 0.034 cm/μs)】.",
    "note": "الإجابة النموذجية: 4 ; 2 ; speed of sound (≈ 0.034 cm/μs)"
  },
  {
    "id": "FILL_Q11",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "In the Hall effect formula V = K_H × (BI/t), B is the _______, I is the _______, and t is the _______ of the conductive plate.",
    "options": [
      "magnetic flux density ; current ; thickness",
      "electric field ; voltage ; length",
      "magnetic field ; charge ; area",
      "flux ; power ; width"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "magnetic flux density ; current ; thickness",
    "filledSentence": "In the Hall effect formula V = K_H × (BI/t), B is the 【magnetic flux density】, I is the 【current】, and t is the 【thickness】 of the conductive plate.",
    "note": "الإجابة النموذجية: magnetic flux density ; current ; thickness"
  },
  {
    "id": "FILL_Q12",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "The push-pull displacement sensor uses two potentiometers in _______ so that as one resistance increases the other _______, improving sensitivity.",
    "options": [
      "opposition (differential) ; decreases",
      "parallel ; increases",
      "series ; stays constant",
      "bridge ; doubles"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "opposition (differential) ; decreases",
    "filledSentence": "The push-pull displacement sensor uses two potentiometers in 【opposition (differential)】 so that as one resistance increases the other 【decreases】, improving sensitivity.",
    "note": "الإجابة النموذجية: opposition (differential) ; decreases"
  },
  {
    "id": "FILL_Q13",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "A piezoelectric accelerometer uses a _______ mass to transmit acceleration forces to a piezoelectric crystal, which generates a proportional _______.",
    "options": [
      "seismic ; potential difference (voltage)",
      "counter ; magnetic flux",
      "damping ; resistance",
      "pendulum ; frequency"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "seismic ; potential difference (voltage)",
    "filledSentence": "A piezoelectric accelerometer uses a 【seismic】 mass to transmit acceleration forces to a piezoelectric crystal, which generates a proportional 【potential difference (voltage)】.",
    "note": "الإجابة النموذجية: seismic ; potential difference (voltage)"
  },
  {
    "id": "FILL_Q14",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "The FSR (Force-Sensitive Resistor) resistance _______ as applied force increases. For force- to-voltage conversion it is placed in a _______ circuit.",
    "options": [
      "decreases ; voltage divider",
      "increases ; bridge rectifier",
      "decreases ; integrator",
      "stays fixed ; differentiator"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "decreases ; voltage divider",
    "filledSentence": "The FSR (Force-Sensitive Resistor) resistance 【decreases】 as applied force increases. For force- to-voltage conversion it is placed in a 【voltage divider】 circuit.",
    "note": "الإجابة النموذجية: decreases ; voltage divider"
  },
  {
    "id": "FILL_Q15",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "In mechanical switch specification, \"poles\" are the number of separate _______ that one switch action can control, and \"throws\" are the number of _______ per pole.",
    "options": [
      "circuits ; contacts (positions)",
      "coils ; terminals",
      "inputs ; outputs",
      "resistors ; switches"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "circuits ; contacts (positions)",
    "filledSentence": "In mechanical switch specification, \"poles\" are the number of separate 【circuits】 that one switch action can control, and \"throws\" are the number of 【contacts (positions)】 per pole.",
    "note": "الإجابة النموذجية: circuits ; contacts (positions)"
  },
  {
    "id": "FILL_Q16",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "Gauge pressure is measured relative to _______ pressure, whereas absolute pressure is measured relative to _______.",
    "options": [
      "atmospheric (barometric) ; zero (perfect vacuum)",
      "gauge ; standard pressure",
      "hydrostatic ; boiling point",
      "ambient ; absolute 1 bar"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "atmospheric (barometric) ; zero (perfect vacuum)",
    "filledSentence": "Gauge pressure is measured relative to 【atmospheric (barometric)】 pressure, whereas absolute pressure is measured relative to 【zero (perfect vacuum)】.",
    "note": "الإجابة النموذجية: atmospheric (barometric) ; zero (perfect vacuum)"
  },
  {
    "id": "FILL_Q17",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "A bellows pressure element can be combined with an _______ to produce a pressure sensor with an electrical output.",
    "options": [
      "LVDT",
      "Thermocouple",
      "Photodiode",
      "Hall probe"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "LVDT",
    "filledSentence": "A bellows pressure element can be combined with an 【LVDT】 to produce a pressure sensor with an electrical output.",
    "note": "الإجابة النموذجية: LVDT"
  },
  {
    "id": "FILL_Q18",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "The variable reluctance tachogenerator produces an AC e.m.f. whose _______ is proportional to the angular velocity of the toothed wheel.",
    "options": [
      "amplitude (maximum value)",
      "phase angle",
      "harmonics",
      "duty cycle"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "amplitude (maximum value)",
    "filledSentence": "The variable reluctance tachogenerator produces an AC e.m.f. whose 【amplitude (maximum value)】 is proportional to the angular velocity of the toothed wheel.",
    "note": "الإجابة النموذجية: amplitude (maximum value)"
  },
  {
    "id": "FILL_Q19",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "In a bimetallic strip, the metal with the _______ thermal expansion coefficient ends up on the outside of the curve when heated.",
    "options": [
      "higher",
      "lower",
      "zero",
      "negative"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "higher",
    "filledSentence": "In a bimetallic strip, the metal with the 【higher】 thermal expansion coefficient ends up on the outside of the curve when heated.",
    "note": "الإجابة النموذجية: higher"
  },
  {
    "id": "FILL_Q20",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "A photodiode is operated in _______ bias. The current that flows in the absence of light is called the _______ current.",
    "options": [
      "reverse ; dark",
      "forward ; saturation",
      "breakdown ; leakage",
      "reverse ; photo"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "reverse ; dark",
    "filledSentence": "A photodiode is operated in 【reverse】 bias. The current that flows in the absence of light is called the 【dark】 current.",
    "note": "الإجابة النموذجية: reverse ; dark"
  },
  {
    "id": "FILL_Q21",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "Smart sensors have the ability to self-_______, compensate for non-_______, and perform self-_______ of faults.",
    "options": [
      "calibrate ; linearities ; diagnosis",
      "repair ; voltages ; assembly",
      "program ; errors ; destruction",
      "connect ; signals ; routing"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "calibrate ; linearities ; diagnosis",
    "filledSentence": "Smart sensors have the ability to self-【calibrate】, compensate for non-【linearities】, and perform self-【diagnosis】 of faults.",
    "note": "الإجابة النموذجية: calibrate ; linearities ; diagnosis"
  },
  {
    "id": "FILL_Q22",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "An inductive proximity sensor detects _______ objects only, by the effect of _______ currents reducing the coil's oscillating magnetic field.",
    "options": [
      "metallic ; eddy",
      "dielectric ; capacitive",
      "magnetic ; static",
      "non-metallic ; displacement"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "metallic ; eddy",
    "filledSentence": "An inductive proximity sensor detects 【metallic】 objects only, by the effect of 【eddy】 currents reducing the coil's oscillating magnetic field.",
    "note": "الإجابة النموذجية: metallic ; eddy"
  },
  {
    "id": "FILL_Q23",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "The settling time is the time for the output to settle within a specified _______ (e.g. _______ %) of the steady-state value.",
    "options": [
      "percentage ; 2",
      "fraction ; 10",
      "ratio ; 5",
      "tolerance ; 0.1"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "percentage ; 2",
    "filledSentence": "The settling time is the time for the output to settle within a specified 【percentage】 (e.g. 【2】 %) of the steady-state value.",
    "note": "الإجابة النموذجية: percentage ; 2"
  },
  {
    "id": "FILL_Q24",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "The non-linearity error is generally quoted as a percentage of the _______ range _______, which represents the maximum output of the sensor.",
    "options": [
      "full ; output",
      "zero ; input",
      "half ; scale",
      "maximum ; span"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "full ; output",
    "filledSentence": "The non-linearity error is generally quoted as a percentage of the 【full】 range 【output】, which represents the maximum output of the sensor.",
    "note": "الإجابة النموذجية: full ; output"
  },
  {
    "id": "FILL_Q25",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "In the digital Hall effect sensor, the _______ prevents false triggering, while the _______ stabilises the supply voltage to the Hall element.",
    "options": [
      "Schmitt trigger ; voltage regulator",
      "operational amplifier ; filter",
      "ADC converter ; comparator",
      "rectifier ; transformer"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "Schmitt trigger ; voltage regulator",
    "filledSentence": "In the digital Hall effect sensor, the 【Schmitt trigger】 prevents false triggering, while the 【voltage regulator】 stabilises the supply voltage to the Hall element.",
    "note": "الإجابة النموذجية: Schmitt trigger ; voltage regulator"
  },
  {
    "id": "FILL_Q26",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "The term \"mechatronics\" was coined by _______ Electric Company in the _______ to refer to the use of electronics in mechanical control.",
    "options": [
      "Yasakawa ; 1970s",
      "Siemens ; 1980s",
      "Mitsubishi ; 1960s",
      "Fanuc ; 1990s"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "Yasakawa ; 1970s",
    "filledSentence": "The term \"mechatronics\" was coined by 【Yasakawa】 Electric Company in the 【1970s】 to refer to the use of electronics in mechanical control.",
    "note": "الإجابة النموذجية: Yasakawa ; 1970s"
  },
  {
    "id": "FILL_Q27",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "The four key elements of a mechatronics system are: _______, _______, _______, and mechanical/electrical components.",
    "options": [
      "Sensors ; Actuators ; Controllers",
      "Resistors ; Capacitors ; Inductors",
      "Motors ; Pumps ; Valves",
      "Batteries ; Wires ; Switches"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "Sensors ; Actuators ; Controllers",
    "filledSentence": "The four key elements of a mechatronics system are: 【Sensors】, 【Actuators】, 【Controllers】, and mechanical/electrical components.",
    "note": "الإجابة النموذجية: Sensors ; Actuators ; Controllers"
  },
  {
    "id": "FILL_Q28",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "An actuator converts an electrical signal into a _______ quantity. The four main types of actuators are: _______, _______, Electric, and _______.",
    "options": [
      "physical ; Hydraulic ; Pneumatic ; Mechanical",
      "digital ; Linear ; Rotary ; Magnetic",
      "thermal ; Optical ; Solar ; Sonic",
      "chemical ; Nuclear ; Solar ; Kinetic"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "physical ; Hydraulic ; Pneumatic ; Mechanical",
    "filledSentence": "An actuator converts an electrical signal into a 【physical】 quantity. The four main types of actuators are: 【Hydraulic】, 【Pneumatic】, Electric, and 【Mechanical】.",
    "note": "الإجابة النموذجية: physical ; Hydraulic ; Pneumatic ; Mechanical"
  },
  {
    "id": "FILL_Q29",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "A microcontroller integrates three major components on a single chip: _______ (MPU), _______, and _______ ports.",
    "options": [
      "Microprocessor ; Memory ; I/O",
      "ALU ; Registers ; Clock",
      "ROM ; RAM ; Flash",
      "CPU ; Bus ; Display"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "Microprocessor ; Memory ; I/O",
    "filledSentence": "A microcontroller integrates three major components on a single chip: 【Microprocessor】 (MPU), 【Memory】, and 【I/O】 ports.",
    "note": "الإجابة النموذجية: Microprocessor ; Memory ; I/O"
  },
  {
    "id": "FILL_Q30",
    "unit": "SET_FILL",
    "type": "fill",
    "question": "The five specialty areas in mechatronics study are: Physical Systems _______, Sensors and Actuators, Signals and _______, Computers and Logic _______, and Software and Data _______.",
    "options": [
      "Modeling ; Systems ; Systems ; Acquisition",
      "Design ; Logic ; Hardware ; Control",
      "Analysis ; Signals ; Circuits ; Storage",
      "Simulation ; Code ; Data ; Processing"
    ],
    "answer": 0,
    "answerLetter": "A",
    "correctText": "Modeling ; Systems ; Systems ; Acquisition",
    "filledSentence": "The five specialty areas in mechatronics study are: Physical Systems 【Modeling】, Sensors and Actuators, Signals and 【Systems】, Computers and Logic 【Systems】, and Software and Data 【Acquisition】.",
    "note": "الإجابة النموذجية: Modeling ; Systems ; Systems ; Acquisition"
  }
];

window.DRAWING_BANK = [
  {
    "id": "DRAW_Q1",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Linear Potentiometer Displacement Sensor",
    "question": "Draw the construction of a linear potentiometer used as a displacement sensor, showing the resistive track, wiper, and the output voltage circuit. Label all components.",
    "components": [
      "Resistive track (Length L)",
      "Sliding wiper (Displacement x)",
      "Excitation voltage Vin (+5V)",
      "Output voltage Vout node",
      "Reference ground (GND)"
    ],
    "formula": "V_out = (x / L) · V_in",
    "diagramType": "Circuit / Mechanical Schematic",
    "asciiDiagram": "+V_in (+5V)\n            o────────┐\n                     │\n                    ┌┴┐\n                    │ │ Resistive\n                    │ │ Track (Length L)\n                    │ │\n        V_out <─────┼─┤ <── Wiper (Displacement x)\n                    │ │\n                    │ │\n                    └┬┘\n                     │\n            o────────┴───── Ground (0V)",
    "note": "Linear relationship between wiper position x and output voltage Vout. Acts as an unloaded voltage divider."
  },
  {
    "id": "DRAW_Q2",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "LVDT Construction & Output Characteristic Curve",
    "question": "Draw the internal construction of an LVDT (Linear Variable Differential Transformer), clearly labelling the primary coil, two secondary coils, magnetic core, and insulated tube. Add the voltage– displacement output curve.",
    "components": [
      "Primary AC excitation coil",
      "Secondary coil 1 (S1)",
      "Secondary coil 2 (S2, series-opposing)",
      "Ferromagnetic nickel-iron core",
      "Non-magnetic insulating coil former"
    ],
    "formula": "V_diff = V_s1 - V_s2  (V_diff = 0 at Null Position)",
    "diagramType": "Cross-Section & Output Curve",
    "asciiDiagram": "┌─────────────── Core ───────────────┐\n    AC In ~ ┤   [ Sec 1 ]   [ Primary ]   [ Sec 2 ]  ├\n            └────────────────────────────────────┘\n                  │             │             │\n                (Vs1)         (Vin)         (Vs2)\n                  └──────[ Series Opposing ]──┴───> V_out = Vs1 - Vs2\n\n         Output Voltage |       /\n                     V  |      /   Linear Range\n                        |  \\  /\n                        |   \\/ (Null: V=0)\n                        o------------------ Displacement (x)\n                           -x   0   +x",
    "note": "Frictionless, infinite resolution. Output voltage magnitude is proportional to displacement; phase indicates direction."
  },
  {
    "id": "DRAW_Q3",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Push-Pull Potentiometer Displacement Sensor",
    "question": "Draw the circuit diagram of a push-pull displacement sensor using two potentiometers and show how the differential voltage output is obtained.",
    "components": [
      "Potentiometer 1 (R0 + ΔR)",
      "Potentiometer 2 (R0 - ΔR)",
      "Differential amplifier / Output nodes",
      "Supply voltage (+Vs, -Vs)"
    ],
    "formula": "V_out = 2 · (ΔR / R0) · V_s  (Doubled Sensitivity)",
    "diagramType": "Differential Bridge Circuit",
    "asciiDiagram": "+V_s\n               │\n          ┌────┴────┐\n         ┌┴┐       ┌┴┐\n         │ │R1     │ │R2     (R1 = R0 + ΔR, R2 = R0 - ΔR)\n         │ │(Wiper)│ │(Wiper)\n         └┬┘       └┬┘\n          ├─────────┼─────> Differential Output: V_out = V1 - V2\n         ┌┴┐       ┌┴┐\n         │ │R3     │ │R4\n         └┬┘       └┬┘\n          └────┬────┘\n               │\n              -V_s (or GND)",
    "note": "Push-pull design doubles output sensitivity and eliminates common-mode temperature and supply drifts."
  },
  {
    "id": "DRAW_Q4",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Reed Switch & Float Liquid Level Detection System",
    "question": "Draw a schematic diagram showing how a reed switch and float system are used to detect the maximum water level in a washing machine drum. Label the magnet, float, switch, and circuit connections.",
    "components": [
      "Hermetically sealed glass reed switch",
      "Permanent magnet embedded in ring float",
      "Vertical guide tube",
      "Washing machine drum / tank wall",
      "Controller digital input circuit"
    ],
    "formula": "Level = Setpoint Trigger (ON / OFF)",
    "diagramType": "Mechanical & Electrical Schematic",
    "asciiDiagram": "Guide Stem\n                     │\n           ┌─────────┼─────────┐\n           │ [Magnet]│[Magnet] │ <── Annular Float (rises with water)\n           └─────────┼─────────┘\n          ~~~~~~~~~~~│~~~~~~~~~~~ Water Level\n                     │\n                 [Reed Switch]   <── Closed when float reaches target height\n                     │\n                 ====┴==== Tank Base",
    "note": "Magnetic float rises with liquid level. When magnet aligns with reed switch, contacts close, signalling MCU that drum is full."
  },
  {
    "id": "DRAW_Q5",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Smart Sensor Architecture Block Diagram",
    "question": "Draw the block diagram of a smart sensor showing all internal components: sensing element, signal conditioning, microprocessor/ADC, and output interface.",
    "components": [
      "Primary Sensing Element",
      "Analog Signal Conditioning (Amp/Filter)",
      "Analog-to-Digital Converter (ADC)",
      "Microprocessor / DSP Core",
      "Memory (EEPROM/RAM)",
      "Digital Communication Interface (I2C/SPI/CAN/UART)"
    ],
    "formula": "Physical Input ──> Sensing ──> Conditioning ──> ADC ──> MCU/DSP ──> Digital Output",
    "diagramType": "Functional Block Diagram",
    "asciiDiagram": "┌──────────┐   Analog   ┌──────────────┐   Conditioned   ┌─────┐\n    │ Sensing  │───────────>│ Signal       │────────────────>│ ADC │\n    │ Element  │   Signal   │ Conditioning │    Signal       └─────┘\n    └──────────┘            └──────────────┘                    │\n                                                                ▼ Digital\n    ┌──────────────┐        ┌──────────────┐             ┌──────────────┐\n    │ Digital Bus  │<───────│ Comms / DAC  │<────────────│ Micro-       │\n    │ Interface    │        │ Transceiver  │  Processed  │ processor /  │\n    └──────────────┘        └──────────────┘    Data     │ Memory       │\n                                                         └──────────────┘",
    "note": "Smart sensors perform on-board self-calibration, linearisation, digital filtering, and self-diagnostics."
  },
  {
    "id": "DRAW_Q6",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Variable Reluctance Tachogenerator & Waveform",
    "question": "Draw the construction of a variable reluctance tachogenerator (tacho-generator), showing the toothed ferromagnetic wheel, permanent magnet, pick-up coil, and the shape of the output waveform versus rotation.",
    "components": [
      "Toothed ferromagnetic wheel (rotor)",
      "Permanent magnet core",
      "Pick-up coil winding",
      "Rotating machine shaft"
    ],
    "formula": "Frequency f = (N · n) / 60 Hz  (where N = teeth count, n = rpm)",
    "diagramType": "Electromagnetic Sensor Schematic",
    "asciiDiagram": "[ Tooth ]     [ Tooth ]\n                 ┌─┐           ┌─┐\n                 │ ├───────────┤ │  <── Toothed Wheel (Rotating)\n                 └─┘           └─┘\n                      ▲ Air Gap\n                  ┌───┴───┐\n                  │ Coil  │ ──> AC Output Waveform: ~~~/\\/\\/\\~~~\n                  ├───┬───┤\n                  │ Magnet│ (Permanent Pole N/S)\n                  └───────┘",
    "note": "As teeth pass the magnet pole, magnetic reluctance changes, inducing an AC sinusoidal e.m.f. proportional to speed."
  },
  {
    "id": "DRAW_Q7",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Analog Hall Effect Sensor Block Diagram & Response",
    "question": "Draw the Hall effect sensor (analogue output type) block diagram, showing: Hall element, voltage regulator, amplifier, VCC, GND, and output terminals. Sketch the output voltage vs. input magnetic field characteristic.",
    "components": [
      "Hall element plate",
      "Internal voltage regulator",
      "Differential amplifier",
      "VCC, GND, and Vout terminals"
    ],
    "formula": "V_H = K_H · (B · I) / t  ;  V_out = V_0 ± S · B",
    "diagramType": "Block Diagram & Linear Characteristic",
    "asciiDiagram": "VCC ──[ Voltage Regulator ]──┐\n                                     ▼\n        Magnetic Field (B) ──> [ Hall Element ] ──> [ Diff Amp ] ──> V_out\n                                     ▲\n        GND ─────────────────────────┴────────────────────────────> GND\n\n         V_out |          / (Linear analog output)\n               |        /\n          Vcc/2|------/ (Quiescent: B = 0)\n               |    /\n             0 o------------------ B (Magnetic Flux Density)\n                 -B   0   +B (Gauss)",
    "note": "Linear output voltage varies continuously in proportion to magnetic flux density B perpendicular to the plate."
  },
  {
    "id": "DRAW_Q8",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Digital Hall Effect Sensor (Schmitt Trigger & Hysteresis)",
    "question": "Draw the digital output Hall effect sensor block diagram including: Hall element, differential amplifier, Schmitt trigger, voltage regulator, and output. Sketch the ON/OFF output vs. magnetic field curve showing hysteresis.",
    "components": [
      "Hall element",
      "Voltage regulator",
      "Differential amplifier",
      "Schmitt trigger (hysteresis)",
      "Open-collector NPN output transistor"
    ],
    "formula": "B_op (Operate Point) & B_rp (Release Point)",
    "diagramType": "Block Diagram & Hysteresis Curve",
    "asciiDiagram": "[ Hall Element ] ──> [ Diff Amp ] ──> [ Schmitt Trigger ] ──> [ NPN Transistor ] ──> Output\n\n         Output | HIGH (Vcc)\n                | ┌────────┐\n                | │        │\n            LOW | └────────┴────────\n                o------------------ B\n                  B_rp     B_op (Hysteresis prevents chatter)",
    "note": "Schmitt trigger introduces hysteresis to eliminate noise chatter near switching threshold."
  },
  {
    "id": "DRAW_Q9",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Corrugated Diaphragm Pressure Sensor with Strain Gauge",
    "question": "Draw the cross-section of a diaphragm-based fluid pressure sensor (corrugated type) and show where the strain gauge is placed. Label: diaphragm, corrugations, strain gauge, pressure inlet, and fixed housing.",
    "components": [
      "Corrugated metallic diaphragm",
      "Bonded resistance strain gauges",
      "Pressure port / inlet",
      "Rigid outer housing",
      "Atmospheric / reference chamber"
    ],
    "formula": "Strain ε ∝ Pressure P ;  ΔR / R = G · ε",
    "diagramType": "Cross-Section Diagram",
    "asciiDiagram": "Rigid Housing\n            ╔═════════════════════════╗\n            ║     Reference Cavity    ║\n            ║      [Strain Gauge]     ║\n            ║ ───/\\/\\/\\─────/\\/\\/\\─── ║ <── Corrugated Diaphragm\n            ║                         ║\n            ║      Pressure In (P)    ║\n            ╚═══════════╗ ╔═══════════╝\n                        ║ ║ Pressure Inlet",
    "note": "Corrugations increase linear deflection range and sensitivity. Strain gauges placed at points of maximum tensile/compressive strain."
  },
  {
    "id": "DRAW_Q10",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Piezoelectric Accelerometer Construction",
    "question": "Draw the construction of a piezoelectric accelerometer. Label: seismic mass, piezoelectric crystal, preload spring, damper, conductive coating, accelerometer housing, and vibrating base.",
    "components": [
      "Seismic mass (m)",
      "Piezoelectric crystal element (Quartz/PZT)",
      "Preload spring",
      "Base stud mounting",
      "Housing / casing",
      "Conductive electrode leads"
    ],
    "formula": "F = m · a  ;  q = d · F = d · m · a",
    "diagramType": "Structural Cross-Section",
    "asciiDiagram": "╔══════════════════════╗ Housing\n            ║   [ Preload Spring ] ║\n            ║   ┌────────────────┐ ║\n            ║   │  Seismic Mass  │ ║\n            ║   ├────────────────┤ ║\n            ║   │ Piezo Crystal  │ ║ ──> Charge / Voltage Output\n            ║   └────────────────┘ ║\n            ║   ================== ║ Base\n            ╚═══════════╦══════════╝\n                        ▼ Vibrating Machine Base (Acceleration a)",
    "note": "Acceleration a forces seismic mass against crystal, generating electric charge q directly proportional to acceleration."
  },
  {
    "id": "DRAW_Q11",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Force-Sensitive Resistor (FSR) Voltage Divider Interface",
    "question": "Draw the force-sensitive resistor (FSR) voltage divider circuit used for force-to-voltage conversion with a 100 kΩ fixed resistor and a +5 V supply. Label the output node and indicate what happens to Vout when force increases.",
    "components": [
      "FSR sensor (R_FSR)",
      "Fixed pull-down resistor R_fixed (100 kΩ)",
      "+5V DC supply",
      "Analog output node (V_out) to ADC"
    ],
    "formula": "V_out = V_cc · [ R_fixed / (R_FSR + R_fixed) ]",
    "diagramType": "Voltage Divider Circuit",
    "asciiDiagram": "+5V (Vcc)\n                 │\n                ┌┴┐\n                │ │  FSR Sensor (Resistance R_FSR decreases with Force)\n                └┬┘\n                 ├──────────> V_out (to Arduino Analog Pin A0)\n                ┌┴┐\n                │ │  Fixed Resistor R_fixed (100 kΩ)\n                └┬┘\n                 │\n                GND (0V)",
    "note": "When force increases, R_FSR drops from >1 MΩ to <1 kΩ, causing V_out to rise from ~0V towards +5V."
  },
  {
    "id": "DRAW_Q12",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Closed Vessel Liquid Level via Differential Pressure (DP) Cell",
    "question": "Draw a schematic of the liquid level measurement system for a closed vessel using a differential pressure cell (DP), showing both connection points and labelling the DP cell, vessel, liquid surface, and gas space.",
    "components": [
      "Closed pressurized tank / vessel",
      "Differential Pressure (DP) transmitter",
      "High-pressure tapping (tank bottom)",
      "Low-pressure tapping (vapor space at top)",
      "Isolating impulse piping"
    ],
    "formula": "ΔP = P_high - P_low = (P_gas + ρ·g·h) - P_gas = ρ·g·h",
    "diagramType": "Process Instrumentation Diagram",
    "asciiDiagram": "┌────────────────────────┐\n                │ Vapor Space (P_gas)   o──┐ Low-Pressure Leg\n                │                        │  │\n                │ ~~~~~~~~~~~~~~~~~~~~~~ │  │\n                │ Liquid (Height h, ρ)   │  │\n                │                        │  │\n                └───────o────────────────┘  │\n                        │ High-Pressure     │\n                        ▼ Leg               ▼\n                    ┌───────────────────────────┐\n                    │  Differential Pressure    │ ──> Output 4-20mA / 0-5V\n                    │  Cell Transmitter (ΔP)    │     (Directly indicates height h)\n                    └───────────────────────────┘",
    "note": "By subtracting vapor head pressure P_gas, the differential pressure ΔP isolates pure hydrostatic liquid column height h."
  },
  {
    "id": "DRAW_Q13",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "NTC Thermistor Voltage Divider Interface with Arduino UNO",
    "question": "Draw the NTC thermistor voltage divider circuit connected to the analogue input of an Arduino UNO. Label all components, supply voltage, and output pin.",
    "components": [
      "NTC Thermistor (10 kΩ @ 25°C)",
      "Fixed precision resistor (10 kΩ)",
      "Arduino UNO 5V, GND, and A0 Analog Pin"
    ],
    "formula": "V_A0 = 5V · [ R_fixed / (R_NTC + R_fixed) ]",
    "diagramType": "Microcontroller Circuit Interface",
    "asciiDiagram": "Arduino UNO                Divider Circuit\n          ┌─────────────┐               +5V\n          │          5V ├────────────────┬───\n          │             │               ┌┴┐\n          │             │               │ │ R_NTC (Thermistor)\n          │             │               └┬┘\n          │          A0 ├────────────────┼─── Analog Read Pin\n          │             │               ┌┴┐\n          │             │               │ │ R_fixed (10 kΩ)\n          │             │               └┬┘\n          │         GND ├────────────────┴─── GND\n          └─────────────┘",
    "note": "As temperature rises, R_NTC decreases, causing voltage at Analog pin A0 to increase. Arduino converts via 10-bit ADC."
  },
  {
    "id": "DRAW_Q14",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "LM35 Precision Analog Temperature Sensor with Arduino UNO",
    "question": "Draw the LM35 thermodiode temperature sensor circuit connected to an Arduino UNO analogue input. Label VCC (+5 V), GND, and output connections.",
    "components": [
      "LM35 Precision Centigrade Sensor (TO-92)",
      "Pin 1: +Vs (+5V)",
      "Pin 2: Vout (Analog)",
      "Pin 3: GND (Ground)",
      "Arduino UNO board"
    ],
    "formula": "V_out = 10 mV / °C  ;  Temp (°C) = V_out (mV) / 10",
    "diagramType": "Wiring Diagram",
    "asciiDiagram": "LM35 (Bottom View)         Arduino UNO\n                ┌─────────┐            ┌─────────────┐\n                │ 1  2  3 │            │             │\n                └──┬──┬──┬┘            │             │\n          Pin 1 (Vs) ─────── +5V ──────┤ 5V          │\n          Pin 2 (Out) ────── Vout ─────┤ A1 (ADC In) │\n          Pin 3 (GND) ────── GND ──────┤ GND         │\n                                       └─────────────┘",
    "note": "Linear calibrated scale (+10.0 mV/°C). No external calibration needed. Direct connection to Arduino analog inputs."
  },
  {
    "id": "DRAW_Q15",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "MAX6675 K-Type Thermocouple SPI Interface with Arduino",
    "question": "Draw the MAX6675 thermocouple module connected to an Arduino UNO, clearly showing the three SPI signal connections: SCK (Pin 6), CS (Pin 5), and SO (Pin 4), as well as power connections.",
    "components": [
      "K-Type Thermocouple probe (+ / -)",
      "MAX6675 Digitizer Module",
      "SPI Pins: SCK (Clock), CS (Chip Select), SO (MISO)",
      "Power Pins: VCC (+5V), GND",
      "Arduino UNO pins 6, 5, 4"
    ],
    "formula": "12-bit SPI Serial Data (0.25°C Resolution, 0°C to +1024°C)",
    "diagramType": "SPI Digital Bus Interconnection",
    "asciiDiagram": "K-Thermocouple        MAX6675 Module            Arduino UNO\n           [ + ] ──────────── T+    ┌────────────┐     ┌─────────────┐\n           [ - ] ──────────── T-    │ VCC    GND │     │ 5V      GND │\n                                    └──┬──────┬──┘     └──┬───────┬──┘\n                                       │      │           │       │\n                                    ┌──┴──────┴──┐        │       │\n                                    │ SCK  CS SO │        │       │\n                                    └──┬───┬───┬─┘        │       │\n                                       │   │   └──────────┼───────┤ Pin 4 (SO/MISO)\n                                       │   └──────────────┼───────┤ Pin 5 (CS)\n                                       └──────────────────┼───────┤ Pin 6 (SCK)\n                                                          └───────┘",
    "note": "MAX6675 performs cold-junction compensation, analog amplification, 12-bit ADC conversion, and transmits via 3-wire SPI."
  },
  {
    "id": "DRAW_Q16",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Incremental Optical Encoder Disc & Quadrature Track Setup",
    "question": "Draw the construction of an incremental optical encoder disc, showing: the inner single-hole index track, two outer offset tracks, LED source, and photodetector. Indicate how direction of rotation is determined.",
    "components": [
      "Slotted code wheel disc",
      "Track A (Outer)",
      "Track B (90° phase quadrature offset)",
      "Track Z / Index (Single reference slot per revolution)",
      "Infrared LED source & Photodiode pair"
    ],
    "formula": "Resolution = 360° / N  ;  Direction detected by Phase Lead/Lag (A vs B)",
    "diagramType": "Encoder Disc Track Layout & Quadrature Signals",
    "asciiDiagram": "┌────────────────────────────────┐\n                 │     (○) Index Track Z (1 slot) │\n                 │    ░░░░  Track B (Offset 90°)  │\n                 │   ░░░░░░ Track A (Outer N slots│\n                 └────────────────────────────────┘\n                          ▲\n                      [LED / Photo-detectors]\n\n        CW Rotation:   Track A leads Track B by 90°\n        CCW Rotation:  Track B leads Track A by 90°",
    "note": "Two channels in quadrature (90° out of phase) allow detection of both speed (pulse frequency) and direction of rotation."
  },
  {
    "id": "DRAW_Q17",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Strain Gauge Load Cell as Secondary Liquid Level Sensor",
    "question": "Draw a strain gauge load cell (50 kg capacity) as a secondary sensor for measuring the level of liquid in a cylindrical vessel. Show how the load cell supports the vessel and how its output relates to liquid level.",
    "components": [
      "Cylindrical vessel (Cross-sectional area A)",
      "Liquid of density ρ",
      "Strain gauge load cell support (50 kg capacity)",
      "Rigid mounting base",
      "Weight indicator / Amplifier"
    ],
    "formula": "Weight W = W_empty + (ρ · g · A) · h  ==>  h = (W - W_empty) / (ρ · g · A)",
    "diagramType": "Gravimetric Level Measurement System",
    "asciiDiagram": "┌────────────────────────┐\n              │ Cylindrical Vessel     │\n              │ Liquid Height h,       │\n              │ Cross-section Area A   │\n              │                        │\n              └───────────┬────────────┘\n                          │ Vessel Base\n                 ┌────────┴────────┐\n                 │ Load Cell (50kg)│ ──> Output Signal ∝ Liquid Mass ∝ Level h\n                 └────────┬────────┘\n             ═════════════╧═════════════ Rigid Foundation",
    "note": "Non-invasive gravimetric measurement. Measures total vessel weight and calculates height h without direct liquid contact."
  },
  {
    "id": "DRAW_Q18",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "LVDT Signal Conditioning Circuit Block Diagram",
    "question": "Draw the block diagram of the LVDT signal conditioning circuit that converts the raw AC differential output to a DC voltage unique to each displacement. Include: LVDT coils, phase- sensitive demodulator, and low-pass filter.",
    "components": [
      "LVDT sensor coils",
      "AC carrier oscillator (1–10 kHz)",
      "Differential AC amplifier",
      "Phase-sensitive demodulator (synchronous rectifier)",
      "Low-pass filter (LPF)",
      "DC output buffer"
    ],
    "formula": "AC Differential Output ──> Demodulation (Phase vs Ref) ──> LPF ──> Signed DC Voltage (±V_out)",
    "diagramType": "Signal Conditioning Block Diagram",
    "asciiDiagram": "┌────────────┐   Carrier Excite (Vin)\n    │ Oscillator ├───────────────────────┐\n    └─────┬──────┘                       │\n          │ Reference                    ▼\n          │                     ┌─────────────────┐\n          │                     │ LVDT Coils (S1,S2│──> Differential AC (Vs1 - Vs2)\n          │                     └────────┬────────┘\n          │                              ▼\n          │                     ┌─────────────────┐\n          │                     │ AC Differential │\n          │                     │ Amplifier       │\n          │                     └────────┬────────┘\n          │                              ▼\n          │ Reference           ┌─────────────────┐\n          └────────────────────>│ Phase-Sensitive │ (Resolves Direction/Sign)\n                                │ Demodulator     │\n                                └────────┬────────┘\n                                         ▼\n                                ┌─────────────────┐\n                                │ Low-Pass Filter │──> Pure Linear DC Output (±V_out)\n                                └─────────────────┘",
    "note": "Converts differential AC amplitude and phase into a bipolar DC voltage where polarity indicates direction and magnitude indicates displacement."
  },
  {
    "id": "DRAW_Q19",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "A3144 Hall Effect Sensor Module Interfacing with Arduino UNO",
    "question": "Draw the circuit diagram for connecting a Hall effect sensor module (A3144 type with AO, DO, GND, VCC pins) to an Arduino UNO, showing both the digital and analogue output connections.",
    "components": [
      "A3144 Hall Sensor Module (4 pins: VCC, GND, DO, AO)",
      "On-board potentiometer & LM393 comparator",
      "Arduino UNO board (5V, GND, D2, A0)"
    ],
    "formula": "DO = Digital Trigger (LOW on magnet detect), AO = Analog Hall Voltage",
    "diagramType": "Module Wiring Diagram",
    "asciiDiagram": "A3144 Hall Module               Arduino UNO\n         ┌───────────────┐             ┌─────────────┐\n         │           VCC ├─────────────┤ 5V          │\n         │           GND ├─────────────┤ GND         │\n         │   DO (Digital)├─────────────┤ Pin 2 (Int0)│\n         │   AO (Analog) ├─────────────┤ Pin A0      │\n         └───────────────┘             └─────────────┘",
    "note": "DO pin provides interrupt-driven digital trigger on magnetic presence; AO pin provides continuous magnetic field reading."
  },
  {
    "id": "DRAW_Q20",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Capacitive Liquid Level Sensor (Parallel Plate Electrodes)",
    "question": "Draw a capacitive liquid level sensor arrangement showing two vertical parallel plate electrodes inside a vessel. Explain how rising liquid level between the plates changes the capacitance.",
    "components": [
      "Two parallel vertical metal plate electrodes",
      "Vessel containing liquid (dielectric constant ε_r > 1)",
      "Capacitance measuring bridge circuit",
      "Air/vapor dielectric space (ε_air ≈ 1)"
    ],
    "formula": "C = (w / d) · [ ε_air·(H - h) + ε_liquid·h ]  ==>  ΔC ∝ h",
    "diagramType": "Electrostatic Level Sensor Schematic",
    "asciiDiagram": "┌───┐             ┌───┐\n                │   │             │   │  Electrode Plates (Width w, Separation d)\n                │   │ Air (ε_air) │   │\n           ~~~~~│~~~│~~~~~~~~~~~~~│~~~│~~~~~ Liquid Level h\n                │   │             │   │\n                │   │ Liquid      │   │\n                │   │ (ε_liquid)  │   │\n                └───┘             └───┘\n                  │                 │\n                  └──────[ C ]──────┘  ──> Capacitance Bridge Circuit",
    "note": "Because liquid dielectric constant ε_liquid is much higher than air, rising liquid level h linearly increases total capacitance C."
  },
  {
    "id": "DRAW_Q21",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Closed-Loop Active Suspension Mechatronics Control System",
    "question": "Draw the block diagram of a complete closed-loop mechatronics control system for automobile active suspension. Label the four key elements: sensor (road condition sensor), controller (ECU), actuator (hydraulic/pneumatic strut), and mechanical system (suspension). Show the feedback path.",
    "components": [
      "Road Condition Sensor (Accelerometer / Displacement)",
      "Electronic Control Unit (ECU Controller / PID)",
      "Hydraulic / Pneumatic Actuator Strut",
      "Vehicle Suspension / Chassis (Mechanical System)",
      "Feedback Loop"
    ],
    "formula": "Error e(t) = Desired Ride Height - Measured Height ;  Control Action u(t) = PID(e(t))",
    "diagramType": "Closed-Loop Feedback Block Diagram",
    "asciiDiagram": "Setpoint ──(+)──> [ Controller ] ──> [ Actuator ] ──> [ Suspension ] ──> Vehicle Ride\n    (Target)    ▲ -   (ECU / PID)        (Hydraulic)      (Plant/Chassis)   Quality\n                │                                                │\n                └─────────── [ Road & Height Sensor ] <──────────┘\n                             (Feedback Measurement)",
    "note": "ECU continuously compares measured chassis motion against desired profile and commands hydraulic actuators to counteract road bumps."
  },
  {
    "id": "DRAW_Q22",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Microcontroller Internal Architecture Block Diagram",
    "question": "Draw the internal architecture block diagram of a microcontroller, showing its three main integrated components: Microprocessor (MPU), Memory (RAM/ROM), and I/O Ports. Add arrows to show data flow between components and label the external connections to sensors and actuators.",
    "components": [
      "Microprocessor Unit (MPU / CPU Core & ALU)",
      "Internal Memory (RAM, ROM / Flash, EEPROM)",
      "I/O Ports & Peripherals (Digital I/O, Timers, ADC, UART, SPI, I2C)",
      "Internal Data / Address / Control Buses"
    ],
    "formula": "Single Integrated IC: CPU + Memory + Peripherals on one Silicon Chip",
    "diagramType": "Microcontroller Internal Architecture",
    "asciiDiagram": "╔═══════════════════════════════════════════════════════════╗\n        ║                 MICROCONTROLLER (MCU)                     ║\n        ║                                                           ║\n        ║   ┌────────────────────┐         ┌────────────────────┐   ║\n        ║   │ CPU / MPU Core     │<───────>│ Memory             │   ║\n        ║   │ (ALU + Registers)  │         │ (Flash / RAM)      │   ║\n        ║   └─────────┬──────────┘         └────────────────────┘   ║\n        ║             ▲                                             ║\n        ║             │ Internal Bus (Data / Address / Control)     ║\n        ║             ▼                                             ║\n        ║   ┌───────────────────────────────────────────────────┐   ║\n        ║   │ I/O Ports & Peripherals (Timers, ADC, UART, SPI)  │   ║\n        ║   └─────────────────────────┬─────────────────────────┘   ║\n        ╚═════════════════════════════╪═════════════════════════════╝\n                                      ▼\n                        External Sensors & Actuators",
    "note": "Unlike microprocessors which require external chips, microcontrollers integrate CPU, memory, and I/O hardware on a single chip."
  },
  {
    "id": "DRAW_Q23",
    "unit": "SET_DRAW",
    "type": "drawing",
    "title": "Arduino UNO Board Architecture & Pinout Diagram",
    "question": "Draw a labelled diagram of the Arduino UNO board identifying: digital I/O pins, analogue input pins (A0–A5), power pins (5V, 3.3V, GND), USB connector, reset button, and the ATmega328P microcontroller chip.",
    "components": [
      "ATmega328P Microcontroller chip",
      "14 Digital I/O Pins (Pins 0–13, 6 PWM ~)",
      "6 Analog Input Pins (A0–A5)",
      "Power Pins (5V, 3.3V, GND, Vin)",
      "USB Interface & Power Jack",
      "Reset Button & 16 MHz Crystal Oscillator"
    ],
    "formula": "ATmega328P @ 16 MHz, 32 KB Flash, 2 KB SRAM, 10-bit ADC",
    "diagramType": "Board Layout & Pinout Schematic",
    "asciiDiagram": "┌──────────────────────────────────────────────────────────┐\n          │ [USB]  [DC Jack]               [ AREF, GND, D13..D0 ]    │\n          │                                  PWM Pins: 3,5,6,9,10,11 │\n          │ ┌──────┐                                                 │\n          │ │Reset │                                                 │\n          │ └──────┘                                                 │\n          │                 ┌─────────────────┐                      │\n          │                 │   ATmega328P    │                      │\n          │                 │ Microcontroller │                      │\n          │                 └─────────────────┘                      │\n          │                                                          │\n          │ [Power: 3.3V, 5V, GND, Vin]   [Analog Inputs: A0 .. A5] │\n          └──────────────────────────────────────────────────────────┘",
    "note": "Standard prototyping board featuring ATmega328P, on-board 5V voltage regulation, 16 MHz clock, and USB bootloader."
  }
];
