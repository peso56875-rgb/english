// MEC 141 - Introduction to Mechatronics (Spring 2025-26)
// Official Question Bank, Fill-in-the-Blank, and Exam-Accurate SVG Blueprint Drawings
// Faculty of Engineering, Delta University for Science and Technology

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
    "title": "Exam Blueprints & Engineering Drawings",
    "arabic": "مخططات ورسومات الامتحان النموذجية"
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
    "title": "Linear Potentiometer Displacement Sensor (مقياس الجهد الخطي للإزاحة)",
    "question": "Draw the construction of a linear potentiometer used as a displacement sensor, showing the resistive track, wiper, and the output voltage circuit. Label all components.",
    "components": [
      "Resistive track (Length L)",
      "Sliding wiper (Displacement x)",
      "Excitation voltage Vin (+5V)",
      "Output voltage Vout node",
      "Reference ground (GND)"
    ],
    "formula": "V_out = (x / L) · V_in",
    "diagramType": "Circuit & Characteristic Curve (مخطط الدائرة ومنحنى الاستجابة)",
    "examSteps": [
      "1. ارسم مستطيلاً رأسياً يمثل المسار المقاوم بطول كلي L.",
      "2. وصل الطرف العلوي بجهد التغذية Vin (+5V) والطرف السفلي بالأرضي GND (0V).",
      "3. ارسم مؤشر المنزلق (Sliding Wiper) بسهم يلامس المقاومة على مسافة x من الأسفل.",
      "4. أخرج طرف الجهد الناتج Vout من المنزلق.",
      "5. ارسم بجوارها المحاور (Vout مقابل x) بخط مستقيم مائل يبدأ من (0,0) ويصل إلى (L, Vin).",
      "6. اكتب المعادلة: Vout = (x / L) * Vin."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Linear Potentiometer Displacement Sensor\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(40, 35)\">\n    <text x=\"140\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Circuit Schematic (مخطط الدائرة)</text>\n    <line x1=\"40\" y1=\"60\" x2=\"140\" y2=\"60\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n    <circle cx=\"40\" cy=\"60\" r=\"5\" fill=\"#f43f5e\"/>\n    <text x=\"35\" y=\"45\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\">Vin (+5V)</text>\n    <line x1=\"140\" y1=\"60\" x2=\"140\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n    <rect x=\"120\" y=\"90\" width=\"40\" height=\"200\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"4\"/>\n    <path d=\"M 125 110 L 155 110 M 125 130 L 155 130 M 125 150 L 155 150 M 125 170 L 155 170 M 125 190 L 155 190 M 125 210 L 155 210 M 125 230 L 155 230 M 125 250 L 155 250 M 125 270 L 155 270\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    <text x=\"80\" y=\"195\" fill=\"#f59e0b\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"end\">Resistive Track</text>\n    <text x=\"80\" y=\"210\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"11\" text-anchor=\"end\">(Length L)</text>\n    <line x1=\"100\" y1=\"90\" x2=\"100\" y2=\"290\" stroke=\"#94a3b8\" stroke-width=\"1.5\" marker-start=\"url(#arr)\" marker-end=\"url(#arr)\"/>\n    <line x1=\"135\" y1=\"180\" x2=\"240\" y2=\"180\" stroke=\"#10b981\" stroke-width=\"3\"/>\n    <polygon points=\"135,180 150,173 150,187\" fill=\"#10b981\"/>\n    <circle cx=\"240\" cy=\"180\" r=\"5\" fill=\"#10b981\"/>\n    <text x=\"250\" y=\"185\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"15\" font-weight=\"bold\">Vout</text>\n    <text x=\"210\" y=\"160\" fill=\"#10b981\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\">Sliding Wiper</text>\n    <line x1=\"175\" y1=\"290\" x2=\"175\" y2=\"180\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arr)\"/>\n    <text x=\"185\" y=\"240\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">x</text>\n    <line x1=\"140\" y1=\"290\" x2=\"140\" y2=\"330\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n    <line x1=\"40\" y1=\"330\" x2=\"140\" y2=\"330\" stroke=\"#64748b\" stroke-width=\"3\"/>\n    <circle cx=\"40\" cy=\"330\" r=\"5\" fill=\"#64748b\"/>\n    <text x=\"35\" y=\"350\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\">GND (0V)</text>\n    <line x1=\"90\" y1=\"330\" x2=\"90\" y2=\"345\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <line x1=\"80\" y1=\"345\" x2=\"100\" y2=\"345\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <line x1=\"84\" y1=\"350\" x2=\"96\" y2=\"350\" stroke=\"#64748b\" stroke-width=\"1.5\"/>\n    <line x1=\"88\" y1=\"355\" x2=\"92\" y2=\"355\" stroke=\"#64748b\" stroke-width=\"1\"/>\n  </g>\n  <g transform=\"translate(440, 35)\">\n    <text x=\"160\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Output Response Curve (منحنى الخرج)</text>\n    <line x1=\"50\" y1=\"300\" x2=\"290\" y2=\"300\" stroke=\"#cbd5e1\" stroke-width=\"2\" marker-end=\"url(#arr)\"/>\n    <line x1=\"50\" y1=\"300\" x2=\"50\" y2=\"70\" stroke=\"#cbd5e1\" stroke-width=\"2\" marker-end=\"url(#arr)\"/>\n    <text x=\"290\" y=\"325\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">x (Displacement)</text>\n    <text x=\"45\" y=\"60\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">Vout (V)</text>\n    <line x1=\"50\" y1=\"300\" x2=\"250\" y2=\"100\" stroke=\"#10b981\" stroke-width=\"3.5\" filter=\"url(#glow)\"/>\n    <circle cx=\"250\" cy=\"100\" r=\"5\" fill=\"#10b981\"/>\n    <circle cx=\"50\" cy=\"300\" r=\"4\" fill=\"#cbd5e1\"/>\n    <line x1=\"250\" y1=\"100\" x2=\"250\" y2=\"300\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n    <line x1=\"50\" y1=\"100\" x2=\"250\" y2=\"100\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n    <text x=\"250\" y=\"318\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">L (Max)</text>\n    <text x=\"35\" y=\"105\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"end\">Vin</text>\n    <rect x=\"70\" y=\"140\" width=\"180\" height=\"55\" fill=\"rgba(16,185,129,0.15)\" stroke=\"#10b981\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"160\" y=\"165\" fill=\"#6ee7b7\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Vout = (x / L) · Vin</text>\n    <text x=\"160\" y=\"185\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">علاقة خطية مثالية (Linear)</text>\n  </g>\n\n</svg>",
    "note": "يعمل مقسم جهد متغير خطياً؛ حيث تتناسب قيمة جهد الخرج Vout طردياً مع إزاحة المنزلق x.",
    "unit": "SET_B"
  },
  {
    "id": "DRAW_Q2",
    "title": "LVDT Construction & Output Curve (تركيب محول LVDT ومنحنى الخرج)",
    "question": "Draw the internal construction of an LVDT (Linear Variable Differential Transformer), clearly labelling the primary coil, two secondary coils, magnetic core, and insulated tube. Add the voltage–displacement output curve.",
    "components": [
      "Primary AC excitation coil",
      "Secondary coil 1 (S1)",
      "Secondary coil 2 (S2, series-opposing)",
      "Ferromagnetic soft-iron core",
      "Non-magnetic insulating coil former tube",
      "Output V-x curve with Null point (V=0)"
    ],
    "formula": "V_out = V_s1 - V_s2  ;  At null (x = 0) ==> V_s1 = V_s2 ==> V_out = 0 V",
    "diagramType": "Cross-Section & Output Curve (قطاع تركيبي ومنحنى الخرج)",
    "examSteps": [
      "1. ارسم مستطيلاً خارجياً منقطاً يمثل الأنبوب العازل غير المغناطيسي (Insulating Tube).",
      "2. ارسم الملف الابتدائي (Primary Coil) في المنتصف تماماً، وملفين ثانويين متطابقين (S1 و S2) على الجانبين.",
      "3. ارسم القضيب / القلب المغناطيسي (Movable Iron Core) في المنتصف وسهم إزاحة ±x.",
      "4. وصل الملفين الثانويين على التضاد (Series-Opposing): نهاية S1 مع نهاية S2، والطرفين الآخرين هما الخرج Vout.",
      "5. ارسم منحنى الاستجابة V-shape على شكل حرف V يمر بنقطة الأصل (Null Position عند x=0 حيث Vout=0).",
      "6. وضح أن فرق الطور (180°) يحدد اتجاه الحركة يميناً أو يساراً."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"LVDT Construction and Output Curve\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(30, 25)\">\n    <text x=\"200\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">LVDT Construction (التركيب الداخلي)</text>\n    <rect x=\"40\" y=\"65\" width=\"320\" height=\"150\" fill=\"rgba(255,255,255,0.03)\" stroke=\"#64748b\" stroke-width=\"2\" stroke-dasharray=\"5,5\" rx=\"6\"/>\n    <text x=\"200\" y=\"55\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"12\" text-anchor=\"middle\">Insulating Coil Former Tube (أنبوب غير مغناطيسي)</text>\n    <rect x=\"60\" y=\"75\" width=\"70\" height=\"35\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"3\"/>\n    <rect x=\"60\" y=\"170\" width=\"70\" height=\"35\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"3\"/>\n    <text x=\"95\" y=\"97\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Sec 1 (S1)</text>\n    <rect x=\"165\" y=\"75\" width=\"70\" height=\"35\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2\" rx=\"3\"/>\n    <rect x=\"165\" y=\"170\" width=\"70\" height=\"35\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2\" rx=\"3\"/>\n    <text x=\"200\" y=\"97\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Primary (P)</text>\n    <rect x=\"270\" y=\"75\" width=\"70\" height=\"35\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"3\"/>\n    <rect x=\"270\" y=\"170\" width=\"70\" height=\"35\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"3\"/>\n    <text x=\"305\" y=\"97\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Sec 2 (S2)</text>\n    <rect x=\"120\" y=\"125\" width=\"160\" height=\"30\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2.5\" rx=\"4\" filter=\"url(#glow)\"/>\n    <text x=\"200\" y=\"145\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Movable Iron Core (قلب مغناطيسي)</text>\n    <line x1=\"280\" y1=\"140\" x2=\"380\" y2=\"140\" stroke=\"#f59e0b\" stroke-width=\"3\" marker-start=\"url(#arrA)\" marker-end=\"url(#arrA)\"/>\n    <text x=\"340\" y=\"130\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">±x Motion</text>\n    <path d=\"M 200 75 L 200 40 M 200 205 L 200 240\" stroke=\"#a855f7\" stroke-width=\"2\"/>\n    <text x=\"200\" y=\"255\" fill=\"#c084fc\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Vin (AC ~)</text>\n    <path d=\"M 95 205 L 95 275 L 305 275 L 305 205\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"2\"/>\n    <line x1=\"95\" y1=\"75\" x2=\"95\" y2=\"40\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    <line x1=\"305\" y1=\"75\" x2=\"305\" y2=\"40\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    <circle cx=\"95\" cy=\"40\" r=\"4\" fill=\"#10b981\"/>\n    <circle cx=\"305\" cy=\"40\" r=\"4\" fill=\"#10b981\"/>\n    <text x=\"200\" y=\"293\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">توصيل على التضاد (Series Opposing: Vs1 - Vs2)</text>\n    <text x=\"200\" y=\"320\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Vout = Vs1 - Vs2</text>\n  </g>\n  <g transform=\"translate(450, 25)\">\n    <text x=\"160\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">V-x Output Curve (منحنى الخرج والـ Null)</text>\n    <line x1=\"30\" y1=\"200\" x2=\"290\" y2=\"200\" stroke=\"#cbd5e1\" stroke-width=\"2\" marker-end=\"url(#arr)\"/>\n    <line x1=\"160\" y1=\"310\" x2=\"160\" y2=\"50\" stroke=\"#cbd5e1\" stroke-width=\"2\" marker-end=\"url(#arr)\"/>\n    <text x=\"290\" y=\"225\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">+x</text>\n    <text x=\"20\" y=\"225\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">-x</text>\n    <text x=\"165\" y=\"45\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">|Vout| (V)</text>\n    <path d=\"M 60 70 L 160 200 L 260 70\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3.5\" filter=\"url(#glow)\"/>\n    <circle cx=\"160\" cy=\"200\" r=\"5\" fill=\"#f43f5e\"/>\n    <text x=\"160\" y=\"225\" fill=\"#f43f5e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Null (x=0, Vout=0)</text>\n    <text x=\"220\" y=\"110\" fill=\"#10b981\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\">Linear Range</text>\n    <rect x=\"40\" y=\"250\" width=\"240\" height=\"55\" fill=\"rgba(6,182,212,0.12)\" stroke=\"#06b6d4\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"160\" y=\"272\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">فرق الطور 180° يعبر عن الاتجاه (+ أو -)</text>\n    <text x=\"160\" y=\"292\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"11\" text-anchor=\"middle\">Phase indicates direction ±x</text>\n  </g>\n\n</svg>",
    "note": "انعدام الاحتكاك يعطي LVDT عمراً تشغيلياً لا نهائياً مع دقة متناهية، ويعطي خرجا صفريا عند نقطة الصفر Null.",
    "unit": "SET_C"
  },
  {
    "id": "DRAW_Q3",
    "title": "Push-Pull Displacement Sensor Circuit (حساس الإزاحة التدافعي Push-Pull)",
    "question": "Draw the circuit diagram of a push-pull displacement sensor using two potentiometers and show how the differential voltage output is obtained.",
    "components": [
      "Potentiometer 1 (R0 + ΔR)",
      "Potentiometer 2 (R0 - ΔR)",
      "Differential amplifier / Output nodes",
      "Supply voltage (+Vs, -Vs/GND)",
      "Mechanically linked displacement rod"
    ],
    "formula": "V_out = 2 · (ΔR / R0) · V_s",
    "diagramType": "Differential Bridge Circuit (دائرة القنطرة التفاضلية)",
    "examSteps": [
      "1. ارسم قنطرة تتكون من فرعين متوازيين بين +Vs و GND.",
      "2. في الفرع الأيسر ارسم مقاومتين للمنزلق التدافعي (R0 + ΔR في الأعلى، و R0 - ΔR في الأسفل).",
      "3. في الفرع الأيمن ارسم مقاومتين ثابتتين R0 و R0 لتكوين جهد المرجع.",
      "4. أخرج طرف الجهد V1 من منتصف الفرع الأيسر، وطرف V2 من منتصف الفرع الأيمن.",
      "5. وصل الطرفين بمكبر تفاضلي (Differential Op-Amp) للحصول على الخرج Vout = V1 - V2.",
      "6. اكتب معادلة الخرج: Vout = 2 * (ΔR / R0) * Vs ووضح أنها تعطي ضعف الحساسية."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Push-Pull Potentiometer Displacement Sensor\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(60, 25)\">\n    <text x=\"340\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">Push-Pull Differential Potentiometer Bridge Circuit</text>\n    <line x1=\"200\" y1=\"60\" x2=\"480\" y2=\"60\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n    <circle cx=\"340\" cy=\"60\" r=\"5\" fill=\"#f43f5e\"/>\n    <text x=\"340\" y=\"45\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">+Vs (Supply)</text>\n    <line x1=\"240\" y1=\"60\" x2=\"240\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n    <rect x=\"220\" y=\"90\" width=\"40\" height=\"90\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"4\"/>\n    <text x=\"200\" y=\"140\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"end\">R0 + ΔR</text>\n    <line x1=\"240\" y1=\"180\" x2=\"240\" y2=\"210\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n    <rect x=\"220\" y=\"210\" width=\"40\" height=\"90\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"4\"/>\n    <text x=\"200\" y=\"260\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"end\">R0 - ΔR</text>\n    <line x1=\"240\" y1=\"300\" x2=\"240\" y2=\"330\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n    <line x1=\"240\" y1=\"195\" x2=\"310\" y2=\"195\" stroke=\"#10b981\" stroke-width=\"3\"/>\n    <circle cx=\"310\" cy=\"195\" r=\"4\" fill=\"#10b981\"/>\n    <text x=\"315\" y=\"190\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">V1</text>\n    <line x1=\"440\" y1=\"60\" x2=\"440\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n    <rect x=\"420\" y=\"90\" width=\"40\" height=\"90\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"4\"/>\n    <text x=\"475\" y=\"140\" fill=\"#06b6d4\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">R0</text>\n    <line x1=\"440\" y1=\"180\" x2=\"440\" y2=\"210\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n    <rect x=\"420\" y=\"210\" width=\"40\" height=\"90\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"4\"/>\n    <text x=\"475\" y=\"260\" fill=\"#06b6d4\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">R0</text>\n    <line x1=\"440\" y1=\"300\" x2=\"440\" y2=\"330\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n    <line x1=\"440\" y1=\"195\" x2=\"370\" y2=\"195\" stroke=\"#06b6d4\" stroke-width=\"3\"/>\n    <circle cx=\"370\" cy=\"195\" r=\"4\" fill=\"#06b6d4\"/>\n    <text x=\"360\" y=\"190\" fill=\"#06b6d4\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"end\">V2</text>\n    <line x1=\"200\" y1=\"330\" x2=\"480\" y2=\"330\" stroke=\"#64748b\" stroke-width=\"3\"/>\n    <circle cx=\"340\" cy=\"330\" r=\"5\" fill=\"#64748b\"/>\n    <text x=\"340\" y=\"355\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">GND (0V) / -Vs</text>\n    <line x1=\"310\" y1=\"195\" x2=\"310\" y2=\"240\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <line x1=\"370\" y1=\"195\" x2=\"370\" y2=\"240\" stroke=\"#06b6d4\" stroke-width=\"2\"/>\n    <line x1=\"310\" y1=\"240\" x2=\"520\" y2=\"240\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    <line x1=\"370\" y1=\"240\" x2=\"520\" y2=\"240\" stroke=\"#06b6d4\" stroke-width=\"2.5\"/>\n    <polygon points=\"520,215 520,285 580,250\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n    <text x=\"532\" y=\"235\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"12\">-</text>\n    <text x=\"532\" y=\"270\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"12\">+</text>\n    <line x1=\"580\" y1=\"250\" x2=\"640\" y2=\"250\" stroke=\"#10b981\" stroke-width=\"3.5\" filter=\"url(#glow)\"/>\n    <circle cx=\"640\" cy=\"250\" r=\"5\" fill=\"#10b981\"/>\n    <text x=\"650\" y=\"255\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"15\" font-weight=\"bold\">Vout</text>\n    <line x1=\"120\" y1=\"195\" x2=\"220\" y2=\"195\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-dasharray=\"4,4\" marker-end=\"url(#arrA)\"/>\n    <text x=\"110\" y=\"190\" fill=\"#f59e0b\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\">Mechanical Motion (±x)</text>\n    <rect x=\"180\" y=\"365\" width=\"340\" height=\"50\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"350\" y=\"388\" fill=\"#6ee7b7\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Vout = 2 · (ΔR / R0) · Vs</text>\n    <text x=\"350\" y=\"405\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">حساسية مضاعفة 2x وإلغاء لخطأ الحرارة والجهد المشترك</text>\n  </g>\n\n</svg>",
    "note": "ميزة نظام Push-Pull هي مضاعفة الحساسية وإلغاء أي انحراف ناتج عن تغير درجة الحرارة تلقائياً.",
    "unit": "SET_B"
  },
  {
    "id": "DRAW_Q4",
    "title": "Reed Switch & Float Liquid Level Detection (عوامة ومفتاح القصبة لمستوى الماء)",
    "question": "Draw a schematic diagram showing how a reed switch and float system are used to detect the maximum water level in a washing machine drum. Label the magnet, float, switch, and circuit connections.",
    "components": [
      "Washing machine drum wall",
      "Liquid surface (Water Level)",
      "Annular float",
      "Permanent magnet ring",
      "Sealed glass tube",
      "Normally-open reed switch contacts",
      "Vertical guide stem",
      "Washing controller circuit connections"
    ],
    "formula": "Level Trigger = Contact Closure (ON/OFF Logic Signal)",
    "diagramType": "Electromechanical Level Sensing Schematic",
    "examSteps": [
      "1. ارسم جدار وقاع حوض الغسالة (Drum Wall & Base) مع رسم مستوى الماء بخط مموج.",
      "2. ارسم أنبوب توجيه رأسي (Guide Stem) في المنتصف.",
      "3. ارسم العوامة الحلقية (Annular Float) تطفو فوق الماء وبداخلها قطبي مغناطيس دائم (N/S).",
      "4. ارسم كبسولة زجاجية تحوي تلامسات الـ Reed Switch مثبتة عند أقصى مستوى ماء مطلوب.",
      "5. وصل طرفي المفتاح بسلكين نحو وحدة التحكم (Microcontroller) في الغسالة.",
      "6. وضح بسهم صعود العوامة مع الماء لإغلاق التلامسات عند المحاذاة."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Washing Machine Reed Switch and Float System\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(50, 30)\">\n    <text x=\"350\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">Washing Machine Liquid Level Sensing via Reed Switch &amp; Magnetic Float</text>\n\n    <!-- Washing Machine Drum Wall -->\n    <rect x=\"60\" y=\"60\" width=\"20\" height=\"280\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"3\"/>\n    <text x=\"50\" y=\"200\" fill=\"#06b6d4\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"end\" transform=\"rotate(-90 50 200)\">Drum Wall (جدار الغسالة)</text>\n\n    <!-- Water in Drum -->\n    <rect x=\"80\" y=\"160\" width=\"340\" height=\"180\" fill=\"rgba(6,182,212,0.12)\" stroke=\"none\"/>\n    <path d=\"M 80 160 Q 120 152 160 160 T 240 160 T 320 160 T 420 160\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\" filter=\"url(#glow)\"/>\n    <text x=\"130\" y=\"180\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\">Water Level (مستوى الماء)</text>\n\n    <!-- Guide Stem -->\n    <line x1=\"260\" y1=\"50\" x2=\"260\" y2=\"340\" stroke=\"#cbd5e1\" stroke-width=\"4\"/>\n    <text x=\"260\" y=\"40\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">Guide Stem (أنبوب توجيه رأسي)</text>\n\n    <!-- Annular Float with Embedded Magnet -->\n    <rect x=\"190\" y=\"140\" width=\"140\" height=\"35\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2.5\" rx=\"6\"/>\n    <!-- Magnet Pole Inserts -->\n    <rect x=\"200\" y=\"145\" width=\"25\" height=\"25\" fill=\"#f43f5e\" stroke=\"#fff\" stroke-width=\"1\"/>\n    <text x=\"212\" y=\"162\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">N</text>\n    <rect x=\"295\" y=\"145\" width=\"25\" height=\"25\" fill=\"#06b6d4\" stroke=\"#fff\" stroke-width=\"1\"/>\n    <text x=\"307\" y=\"162\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">S</text>\n    <text x=\"260\" y=\"130\" fill=\"#f59e0b\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Ring Float + Magnet (عوامة بمغناطيس)</text>\n\n    <!-- Motion Arrow -->\n    <line x1=\"350\" y1=\"180\" x2=\"350\" y2=\"130\" stroke=\"#10b981\" stroke-width=\"3\" marker-end=\"url(#arrG)\"/>\n    <text x=\"360\" y=\"155\" fill=\"#10b981\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\">Float Rises with Water</text>\n\n    <!-- Sealed Glass Tube with Reed Switch (At Set Level) -->\n    <rect x=\"245\" y=\"100\" width=\"30\" height=\"70\" fill=\"rgba(255,255,255,0.08)\" stroke=\"#a855f7\" stroke-width=\"2\" rx=\"6\"/>\n    <!-- Reed Contacts inside -->\n    <line x1=\"255\" y1=\"105\" x2=\"255\" y2=\"135\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <line x1=\"265\" y1=\"165\" x2=\"265\" y2=\"132\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <polygon points=\"253,135 257,135 260,133 253,133\" fill=\"#f59e0b\"/>\n    <text x=\"215\" y=\"90\" fill=\"#c084fc\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\">Reed Switch Contacts (مفتاح قصبة)</text>\n\n    <!-- Circuit Connection to Controller -->\n    <path d=\"M 255 105 L 255 70 L 480 70\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n    <path d=\"M 265 165 L 265 180 L 440 180 L 440 110 L 480 110\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n\n    <!-- Controller Block -->\n    <rect x=\"480\" y=\"50\" width=\"180\" height=\"90\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"570\" y=\"80\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Washing Machine</text>\n    <text x=\"570\" y=\"100\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">MCU Controller</text>\n    <text x=\"570\" y=\"125\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"11\" text-anchor=\"middle\">Water Full Trigger</text>\n\n    <!-- Tank Base -->\n    <line x1=\"60\" y1=\"340\" x2=\"420\" y2=\"340\" stroke=\"#64748b\" stroke-width=\"4\"/>\n\n    <!-- Summary Box -->\n    <rect x=\"440\" y=\"240\" width=\"240\" height=\"85\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"560\" y=\"265\" fill=\"#6ee7b7\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">مبدأ العمل (Working Principle):</text>\n    <text x=\"560\" y=\"285\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">عند امتلاء الحوض يرتفع المغناطيس</text>\n    <text x=\"560\" y=\"305\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">ليغلق تلامسات الـ Reed Switch فوراً.</text>\n  </g>\n\n</svg>",
    "note": "عند وصول الماء للمستوى المحدد، يحاذي المغناطيس مفتاح القصبة فيغلق التلامسات ويرسل إشارة توقف ملء الماء للمتحكم.",
    "unit": "SET_F"
  },
  {
    "id": "DRAW_Q5",
    "title": "Smart Sensor Block Diagram (المخطط الصندوقي للحساس الذكي)",
    "question": "Draw the block diagram of a smart sensor showing all internal components: sensing element, signal conditioning, microprocessor/ADC, and output interface.",
    "components": [
      "Primary Sensing Element",
      "Analog Signal Conditioning (Amp/Filter)",
      "Analog-to-Digital Converter (ADC)",
      "Microprocessor / DSP Core",
      "Internal Memory (EEPROM/RAM)",
      "Output Interface / Digital Bus (I2C/SPI/CAN)",
      "Self-calibration & Diagnostics feedback loop"
    ],
    "formula": "Physical Input ──> Sensing ──> Conditioning ──> ADC ──> MCU/DSP ──> Digital Bus Output",
    "diagramType": "Functional Block Diagram (مخطط صناديق وظيفي)",
    "examSteps": [
      "1. ارسم إطاراً خارجياً منقطاً يمثل غلاف الحساس الذكي المتكامل.",
      "2. ارسم صندوق الحساس الأولي (Sensing Element) وسهم الدخل الفيزيائي (Measurand).",
      "3. ارسم صندوق تكييف الإشارة (Signal Conditioning) ومكبر الصوت والمرشح.",
      "4. ارسم صندوق المحول التناظري الرقمي (ADC).",
      "5. ارسم صندوق المعالج الدقيق (Microprocessor) والذاكرة (RAM/EEPROM).",
      "6. ارسم خط تغذية مرتدة منقط (Feedback Loop) من المعالج إلى تكييف الإشارة للمعايرة الذاتية.",
      "7. أخرج سهم الخرج الرقمي نحو ناقل الاتصال (I2C / SPI / CAN Bus)."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Smart Sensor Architecture Block Diagram\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(40, 30)\">\n    <text x=\"360\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">Smart Sensor Internal Architecture Block Diagram</text>\n\n    <!-- Outer Smart Sensor Boundary -->\n    <rect x=\"90\" y=\"55\" width=\"580\" height=\"310\" fill=\"rgba(14,23,38,0.7)\" stroke=\"#8b5cf6\" stroke-width=\"2\" stroke-dasharray=\"6,6\" rx=\"10\"/>\n    <text x=\"110\" y=\"80\" fill=\"#c084fc\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">Smart Sensor Integrated Package</text>\n\n    <!-- 1. Sensing Element -->\n    <rect x=\"110\" y=\"110\" width=\"100\" height=\"90\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"160\" y=\"145\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Primary</text>\n    <text x=\"160\" y=\"165\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Sensing Element</text>\n    <text x=\"160\" y=\"185\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">(حساس أولي)</text>\n\n    <!-- Input Measurand Arrow -->\n    <line x1=\"20\" y1=\"155\" x2=\"110\" y2=\"155\" stroke=\"#f59e0b\" stroke-width=\"3.5\" marker-end=\"url(#arrA)\"/>\n    <text x=\"60\" y=\"140\" fill=\"#f59e0b\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Measurand</text>\n    <text x=\"60\" y=\"175\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">(كمية فيزيائية)</text>\n\n    <!-- Arrow 1->2 -->\n    <line x1=\"210\" y1=\"155\" x2=\"250\" y2=\"155\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/>\n\n    <!-- 2. Signal Conditioning -->\n    <rect x=\"250\" y=\"110\" width=\"110\" height=\"90\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"305\" y=\"145\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Signal</text>\n    <text x=\"305\" y=\"165\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Conditioning</text>\n    <text x=\"305\" y=\"185\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">(Amp / Filter)</text>\n\n    <!-- Arrow 2->3 -->\n    <line x1=\"360\" y1=\"155\" x2=\"400\" y2=\"155\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/>\n\n    <!-- 3. ADC -->\n    <rect x=\"400\" y=\"110\" width=\"80\" height=\"90\" fill=\"url(#gradEmerald)\" stroke=\"#10b981\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"440\" y=\"145\" fill=\"#04130e\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">ADC</text>\n    <text x=\"440\" y=\"168\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">Analog to</text>\n    <text x=\"440\" y=\"183\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">Digital</text>\n\n    <!-- Arrow 3->4 -->\n    <line x1=\"480\" y1=\"155\" x2=\"520\" y2=\"155\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/>\n\n    <!-- 4. Microprocessor & Memory -->\n    <rect x=\"520\" y=\"100\" width=\"130\" height=\"110\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2.5\" rx=\"6\"/>\n    <text x=\"585\" y=\"130\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Microprocessor</text>\n    <text x=\"585\" y=\"150\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">&amp; DSP Core</text>\n    <rect x=\"535\" y=\"165\" width=\"100\" height=\"30\" fill=\"rgba(0,0,0,0.3)\" stroke=\"#c084fc\" stroke-width=\"1\" rx=\"3\"/>\n    <text x=\"585\" y=\"185\" fill=\"#c084fc\" font-family=\"JetBrains Mono\" font-size=\"10\" text-anchor=\"middle\">EEPROM / RAM</text>\n\n    <!-- Feedback / Calibration Bus -->\n    <path d=\"M 585 210 L 585 260 L 305 260 L 305 200\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"4,4\" marker-end=\"url(#arrA)\"/>\n    <text x=\"445\" y=\"250\" fill=\"#f59e0b\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">Self-Calibration &amp; Compensation Feedback Loop</text>\n\n    <!-- Output Bus Interface -->\n    <line x1=\"650\" y1=\"155\" x2=\"710\" y2=\"155\" stroke=\"#10b981\" stroke-width=\"3.5\" marker-end=\"url(#arrG)\" filter=\"url(#glow)\"/>\n    <text x=\"715\" y=\"145\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">Digital Output</text>\n    <text x=\"715\" y=\"165\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"11\">(I2C / SPI / CAN)</text>\n\n    <!-- Bottom Features Box -->\n    <rect x=\"110\" y=\"285\" width=\"540\" height=\"60\" fill=\"rgba(6,182,212,0.08)\" stroke=\"#06b6d4\" stroke-width=\"1.2\" rx=\"6\"/>\n    <text x=\"380\" y=\"310\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">وظائف الحساس الذكي (Smart Features):</text>\n    <text x=\"380\" y=\"330\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">معايرة ذاتية (Self-Calibration) ✦ تشخيص الأعطال (Self-Diagnosis) ✦ تصحيح اللاخطية ✦ تواصل رقمي مباشر</text>\n  </g>\n\n</svg>",
    "note": "يدمج الحساس الذكي المعالجة والمعايرة الرقمية والاتصال في شريحة واحدة، مما يقلل الضوضاء ويسهل الربط مع الشبكات.",
    "unit": "SET_A"
  },
  {
    "id": "DRAW_Q6",
    "title": "Variable Reluctance Tachogenerator (مولد التاكو ذو الممانعة المتغيرة)",
    "question": "Draw the construction of a variable reluctance tachogenerator (tacho-generator), showing the toothed ferromagnetic wheel, permanent magnet, pick-up coil, and the shape of the output waveform versus rotation.",
    "components": [
      "Toothed ferromagnetic wheel (Rotor)",
      "Permanent magnet core",
      "Pick-up coil winding",
      "Machine rotating shaft (ω)",
      "Small air gap",
      "Sinusoidal AC output voltage waveform"
    ],
    "formula": "Frequency f = (N · n) / 60 Hz  ;  Output Amplitude V_max ∝ ω",
    "diagramType": "Electromagnetic Tachometer Schematic & Waveform",
    "examSteps": [
      "1. ارسم قرصاً مسنناً (Toothed Rotor) يدور مع عمود الإدارة وبأطرافه أسنان بارزة منتظمة.",
      "2. ارسم حساس الالتقاط (Pick-up Sensor) على مسافة ثغرة هوائية صغيرة (Air Gap).",
      "3. يتكون الحساس من: مغناطيس دائم (Permanent Magnet) وملفوف حوله ملف التقاط (Pick-up Coil).",
      "4. ارسم سهم دوران القرص بالسرعة الزاوية ω.",
      "5. ارسم بجوارها شكل موجة الجهد المتولدة (AC Sine Wave) ووضح أن كلاً من التردد والاتساع يتناسبان طردياً مع سرعة الدوران.",
      "6. اكتب قانون التردد: f = (N * n) / 60."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Variable Reluctance Tachogenerator\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(30, 25)\">\n    <text x=\"210\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Variable Reluctance Tachogenerator Construction</text>\n\n    <!-- Toothed Ferromagnetic Wheel (Rotor) -->\n    <g transform=\"translate(180, 160)\">\n      <!-- Main Wheel Hub -->\n      <circle cx=\"0\" cy=\"0\" r=\"70\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2.5\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"22\" fill=\"#080f1d\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n      <text x=\"0\" y=\"5\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Shaft</text>\n\n      <!-- Teeth around circumference -->\n      <rect x=\"-12\" y=\"-95\" width=\"24\" height=\"25\" fill=\"#06b6d4\" rx=\"2\"/>\n      <rect x=\"-12\" y=\"70\" width=\"24\" height=\"25\" fill=\"#06b6d4\" rx=\"2\"/>\n      <rect x=\"70\" y=\"-12\" width=\"25\" height=\"24\" fill=\"#06b6d4\" rx=\"2\"/>\n      <rect x=\"-95\" y=\"-12\" width=\"25\" height=\"24\" fill=\"#06b6d4\" rx=\"2\"/>\n      <rect x=\"45\" y=\"45\" width=\"22\" height=\"22\" fill=\"#06b6d4\" rx=\"2\" transform=\"rotate(45 56 56)\"/>\n      <rect x=\"-65\" y=\"-65\" width=\"22\" height=\"22\" fill=\"#06b6d4\" rx=\"2\" transform=\"rotate(45 -54 -54)\"/>\n      <rect x=\"45\" y=\"-65\" width=\"22\" height=\"22\" fill=\"#06b6d4\" rx=\"2\" transform=\"rotate(-45 56 -54)\"/>\n      <rect x=\"-65\" y=\"45\" width=\"22\" height=\"22\" fill=\"#06b6d4\" rx=\"2\" transform=\"rotate(-45 -54 56)\"/>\n\n      <!-- Rotation Arrow -->\n      <path d=\"M -35 -40 A 55 55 0 0 1 40 -35\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" marker-end=\"url(#arrG)\"/>\n      <text x=\"0\" y=\"-45\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">ω (rpm)</text>\n    </g>\n\n    <!-- Pick-up Sensor Assembly (Right side) -->\n    <g transform=\"translate(285, 100)\">\n      <!-- Air Gap Line -->\n      <line x1=\"0\" y1=\"60\" x2=\"15\" y2=\"60\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"2,2\"/>\n      <text x=\"8\" y=\"45\" fill=\"#f59e0b\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">Air Gap</text>\n\n      <!-- Pole Piece & Magnet -->\n      <rect x=\"15\" y=\"45\" width=\"40\" height=\"30\" fill=\"#cbd5e1\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n      <rect x=\"55\" y=\"40\" width=\"65\" height=\"40\" fill=\"url(#gradRose)\" stroke=\"#f43f5e\" stroke-width=\"2\" rx=\"3\"/>\n      <text x=\"87\" y=\"65\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Permanent Magnet</text>\n\n      <!-- Pick-up Coil around pole -->\n      <rect x=\"25\" y=\"30\" width=\"25\" height=\"60\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"3\"/>\n      <path d=\"M 28 35 L 47 35 M 28 45 L 47 45 M 28 55 L 47 55 M 28 65 L 47 65 M 28 75 L 47 75 M 28 85 L 47 85\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      <text x=\"37\" y=\"20\" fill=\"#f59e0b\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Pick-up Coil</text>\n\n      <!-- Output Leads -->\n      <path d=\"M 37 30 L 37 5 L 120 5\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n      <path d=\"M 37 90 L 37 115 L 120 115\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n      <circle cx=\"120\" cy=\"5\" r=\"4\" fill=\"#10b981\"/>\n      <circle cx=\"120\" cy=\"115\" r=\"4\" fill=\"#10b981\"/>\n      <text x=\"130\" y=\"65\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">AC Output</text>\n    </g>\n\n    <!-- Formula Box Under Left -->\n    <rect x=\"50\" y=\"280\" width=\"320\" height=\"45\" fill=\"rgba(6,182,212,0.12)\" stroke=\"#06b6d4\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"210\" y=\"308\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">f = (N · n) / 60 Hz</text>\n  </g>\n\n  <!-- AC Output Waveform -->\n  <g transform=\"translate(470, 25)\">\n    <text x=\"140\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Output Sinusoidal Waveform (شكل الموجة)</text>\n    <line x1=\"20\" y1=\"160\" x2=\"270\" y2=\"160\" stroke=\"#cbd5e1\" stroke-width=\"2\" marker-end=\"url(#arr)\"/>\n    <line x1=\"30\" y1=\"260\" x2=\"30\" y2=\"60\" stroke=\"#cbd5e1\" stroke-width=\"2\" marker-end=\"url(#arr)\"/>\n    <text x=\"270\" y=\"185\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">Time / θ</text>\n    <text x=\"25\" y=\"50\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">e.m.f. (V)</text>\n\n    <!-- Sine Wave -->\n    <path d=\"M 30 160 Q 60 80 90 160 T 150 160 T 210 160 T 260 160\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" filter=\"url(#glow)\"/>\n    <line x1=\"90\" y1=\"80\" x2=\"90\" y2=\"160\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    <text x=\"95\" y=\"110\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">Vmax ∝ ω</text>\n\n    <rect x=\"20\" y=\"270\" width=\"250\" height=\"55\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"145\" y=\"292\" fill=\"#6ee7b7\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">التردد والاتساع يتناسبان طردياً مع السرعة</text>\n    <text x=\"145\" y=\"312\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"11\" text-anchor=\"middle\">Amplitude &amp; Frequency ∝ Speed</text>\n  </g>\n\n</svg>",
    "note": "عند مرور كل سن بالقرب من المغناطيس، تقل الممانعة المغناطيسية ويزداد الفيض، مما يولد قوة دافعة كهربية جيبية متناوبة.",
    "unit": "SET_D"
  },
  {
    "id": "DRAW_Q7",
    "title": "Analog Hall Effect Sensor (حساس هول التناظري ومنحنى الخرج)",
    "question": "Draw the Hall effect sensor (analogue output type) block diagram, showing: Hall element, voltage regulator, amplifier, VCC, GND, and output terminals. Sketch the output voltage vs. input magnetic field characteristic.",
    "components": [
      "Hall element conductive plate",
      "Internal voltage regulator",
      "Differential DC amplifier",
      "VCC terminal (+5V)",
      "GND terminal (0V)",
      "Analog output terminal (Vout)",
      "Linear Vout vs B characteristic curve (centered at Vcc/2)"
    ],
    "formula": "V_H = K_H · (B · I) / t  ;  V_out = (V_cc / 2) ± S · B",
    "diagramType": "Block Diagram & Linear Characteristic (مخطط الصناديق والمنحنى الخطي)",
    "examSteps": [
      "1. ارسم خطي التغذية: العلوي VCC والأسفل GND.",
      "2. ارسم صندوق منظم الجهد (Voltage Regulator) متصلاً بـ VCC لتثبيت التيار المار في شريحة هول.",
      "3. ارسم شريحة هول (Hall Element Plate) وسهم المجال المغناطيسي المتعامد B.",
      "4. ارسم المكبر التفاضلي (Differential Amplifier) مستقبلاً فرق الجهد الصغير من الشريحة.",
      "5. أخرج طرف الجهد التناظري Vout.",
      "6. ارسم المنحنى البياني: خط مستقيم يقطع محور الصادات عند نقطة السكون Vcc/2 (عند B=0).",
      "7. اكتب المعادلة: VH = KH * (B * I) / t."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Analog Hall Effect Sensor Block Diagram and Response\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(30, 25)\">\n    <text x=\"210\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Analog Hall Effect Sensor Block Diagram</text>\n\n    <!-- Power Supply Rails -->\n    <line x1=\"30\" y1=\"60\" x2=\"380\" y2=\"60\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n    <circle cx=\"30\" cy=\"60\" r=\"5\" fill=\"#f43f5e\"/>\n    <text x=\"25\" y=\"45\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">VCC (+5V)</text>\n\n    <line x1=\"30\" y1=\"280\" x2=\"380\" y2=\"280\" stroke=\"#64748b\" stroke-width=\"3\"/>\n    <circle cx=\"30\" cy=\"280\" r=\"5\" fill=\"#64748b\"/>\n    <text x=\"25\" y=\"305\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">GND (0V)</text>\n\n    <!-- Voltage Regulator Block -->\n    <rect x=\"70\" y=\"90\" width=\"100\" height=\"50\" fill=\"url(#gradRose)\" stroke=\"#f43f5e\" stroke-width=\"2\" rx=\"5\"/>\n    <text x=\"120\" y=\"115\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Voltage</text>\n    <text x=\"120\" y=\"130\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Regulator</text>\n    <line x1=\"120\" y1=\"60\" x2=\"120\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n    <line x1=\"120\" y1=\"140\" x2=\"120\" y2=\"180\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n\n    <!-- Hall Element Plate -->\n    <rect x=\"80\" y=\"180\" width=\"80\" height=\"70\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2.5\" rx=\"5\"/>\n    <text x=\"120\" y=\"215\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Hall</text>\n    <text x=\"120\" y=\"235\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Element</text>\n    <line x1=\"120\" y1=\"250\" x2=\"120\" y2=\"280\" stroke=\"#64748b\" stroke-width=\"2\"/>\n\n    <!-- Magnetic Field B Arrow -->\n    <line x1=\"30\" y1=\"215\" x2=\"75\" y2=\"215\" stroke=\"#38bdf8\" stroke-width=\"3\" marker-end=\"url(#arr)\"/>\n    <text x=\"45\" y=\"205\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">B (Flux)</text>\n\n    <!-- Differential Amplifier Block -->\n    <line x1=\"160\" y1=\"205\" x2=\"220\" y2=\"205\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <line x1=\"160\" y1=\"225\" x2=\"220\" y2=\"225\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    \n    <polygon points=\"220,180 220,250 290,215\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\"/>\n    <text x=\"235\" y=\"205\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"11\">-</text>\n    <text x=\"235\" y=\"230\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"11\">+</text>\n    <text x=\"250\" y=\"218\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\">Diff Amp</text>\n\n    <!-- Output Terminal -->\n    <line x1=\"290\" y1=\"215\" x2=\"380\" y2=\"215\" stroke=\"#10b981\" stroke-width=\"3.5\" filter=\"url(#glow)\"/>\n    <circle cx=\"380\" cy=\"215\" r=\"5\" fill=\"#10b981\"/>\n    <text x=\"390\" y=\"220\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\">Vout (Analog)</text>\n\n    <!-- Formula -->\n    <rect x=\"50\" y=\"325\" width=\"320\" height=\"40\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"210\" y=\"350\" fill=\"#6ee7b7\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">VH = KH · (B · I) / t</text>\n  </g>\n\n  <!-- Linear Response Curve -->\n  <g transform=\"translate(470, 25)\">\n    <text x=\"140\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Output Voltage vs Magnetic Field (B)</text>\n    <line x1=\"20\" y1=\"180\" x2=\"270\" y2=\"180\" stroke=\"#cbd5e1\" stroke-width=\"2\" marker-end=\"url(#arr)\"/>\n    <line x1=\"140\" y1=\"280\" x2=\"140\" y2=\"50\" stroke=\"#cbd5e1\" stroke-width=\"2\" marker-end=\"url(#arr)\"/>\n    <text x=\"270\" y=\"205\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">+B (South)</text>\n    <text x=\"10\" y=\"205\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">-B (North)</text>\n    <text x=\"145\" y=\"45\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">Vout (V)</text>\n\n    <!-- Linear curve passing through Vcc/2 -->\n    <line x1=\"40\" y1=\"250\" x2=\"240\" y2=\"110\" stroke=\"#10b981\" stroke-width=\"3.5\" filter=\"url(#glow)\"/>\n    <circle cx=\"140\" cy=\"180\" r=\"5\" fill=\"#f59e0b\"/>\n    <text x=\"130\" y=\"170\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\">Vcc / 2</text>\n    <text x=\"140\" y=\"295\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">Quiescent Output (عند B = 0)</text>\n\n    <rect x=\"20\" y=\"320\" width=\"250\" height=\"45\" fill=\"rgba(6,182,212,0.12)\" stroke=\"#06b6d4\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"145\" y=\"347\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Vout = (Vcc/2) ± S · B</text>\n  </g>\n\n</svg>",
    "note": "يعطي حساس هول التناظري جهداً خطياً يتناسب طردياً مع شدة المجال المغناطيسي واتجاه القطب (شمالي/جنوبي).",
    "unit": "SET_D"
  },
  {
    "id": "DRAW_Q8",
    "title": "Digital Hall Effect Sensor & Schmitt Trigger (حساس هول الرقمي ومحفز شميت)",
    "question": "Draw the digital output Hall effect sensor block diagram including: Hall element, differential amplifier, Schmitt trigger, voltage regulator, and output. Sketch the ON/OFF output vs. magnetic field curve showing hysteresis.",
    "components": [
      "Hall element plate",
      "Voltage regulator",
      "Differential amplifier",
      "Schmitt trigger (Hysteresis)",
      "NPN open-collector output transistor",
      "Pull-up resistor",
      "Digital ON/OFF switching curve with B_op and B_rp"
    ],
    "formula": "Hysteresis Band = B_op - B_rp  (Prevents False Triggering & Noise)",
    "diagramType": "Digital Sensor Block Diagram & Hysteresis Curve",
    "examSteps": [
      "1. ارسم خطي التغذية VCC و GND.",
      "2. ارسم منظم الجهد (Regulator) يغذي شريحة هول (Hall Plate).",
      "3. ارسم المكبر التفاضلي (Differential Amplifier) بعد الشريحة.",
      "4. ارسم صندوق Schmitt Trigger ومعه رمز التباطؤ (Hysteresis Loop).",
      "5. ارسم ترانزستور الخرج NPN مع مقاومة الرفع (Pull-Up Resistor) للحصول على خرج رقمي نقي.",
      "6. ارسم منحنى الخرج الرقمي المربع موضحاً نقطتي التبديل: B_op (Operate) و B_rp (Release)."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Digital Hall Effect Sensor with Schmitt Trigger\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(25, 25)\">\n    <text x=\"210\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Digital Hall Effect Sensor Block Diagram</text>\n\n    <!-- Power Rails -->\n    <line x1=\"30\" y1=\"55\" x2=\"410\" y2=\"55\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n    <circle cx=\"30\" cy=\"55\" r=\"5\" fill=\"#f43f5e\"/>\n    <text x=\"25\" y=\"42\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">VCC</text>\n\n    <line x1=\"30\" y1=\"280\" x2=\"410\" y2=\"280\" stroke=\"#64748b\" stroke-width=\"3\"/>\n    <circle cx=\"30\" cy=\"280\" r=\"5\" fill=\"#64748b\"/>\n    <text x=\"25\" y=\"302\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">GND</text>\n\n    <!-- Voltage Regulator -->\n    <rect x=\"50\" y=\"80\" width=\"70\" height=\"40\" fill=\"url(#gradRose)\" stroke=\"#f43f5e\" stroke-width=\"1.5\" rx=\"4\"/>\n    <text x=\"85\" y=\"105\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Regulator</text>\n    <line x1=\"85\" y1=\"55\" x2=\"85\" y2=\"80\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n\n    <!-- Hall Element -->\n    <rect x=\"50\" y=\"150\" width=\"70\" height=\"55\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"4\"/>\n    <text x=\"85\" y=\"182\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Hall Plate</text>\n    <line x1=\"15\" y1=\"177\" x2=\"48\" y2=\"177\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/>\n    <text x=\"25\" y=\"168\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">B</text>\n\n    <!-- Diff Amp -->\n    <polygon points=\"150,145 150,210 205,177\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\"/>\n    <line x1=\"120\" y1=\"168\" x2=\"150\" y2=\"168\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <line x1=\"120\" y1=\"187\" x2=\"150\" y2=\"187\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n    <text x=\"170\" y=\"181\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"9\" font-weight=\"bold\">Amp</text>\n\n    <!-- Schmitt Trigger Block -->\n    <rect x=\"235\" y=\"145\" width=\"80\" height=\"65\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2\" rx=\"5\"/>\n    <line x1=\"205\" y1=\"177\" x2=\"235\" y2=\"177\" stroke=\"#06b6d4\" stroke-width=\"2\"/>\n    <text x=\"275\" y=\"172\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Schmitt</text>\n    <text x=\"275\" y=\"188\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Trigger</text>\n    <!-- Hysteresis icon -->\n    <path d=\"M 260 198 L 275 198 L 275 204 L 290 204\" fill=\"none\" stroke=\"#c084fc\" stroke-width=\"1.5\"/>\n\n    <!-- NPN Output Transistor -->\n    <circle cx=\"360\" cy=\"177\" r=\"22\" fill=\"rgba(255,255,255,0.04)\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <line x1=\"315\" y1=\"177\" x2=\"345\" y2=\"177\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n    <line x1=\"345\" y1=\"162\" x2=\"345\" y2=\"192\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    <line x1=\"345\" y1=\"168\" x2=\"368\" y2=\"155\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <line x1=\"345\" y1=\"186\" x2=\"368\" y2=\"199\" stroke=\"#10b981\" stroke-width=\"2\" marker-end=\"url(#arrG)\"/>\n    <line x1=\"368\" y1=\"199\" x2=\"368\" y2=\"280\" stroke=\"#64748b\" stroke-width=\"2\"/>\n\n    <!-- Pull-up resistor & output -->\n    <line x1=\"368\" y1=\"55\" x2=\"368\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n    <rect x=\"360\" y=\"90\" width=\"16\" height=\"35\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"1.5\"/>\n    <line x1=\"368\" y1=\"125\" x2=\"368\" y2=\"155\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <line x1=\"368\" y1=\"140\" x2=\"420\" y2=\"140\" stroke=\"#10b981\" stroke-width=\"3\" filter=\"url(#glow)\"/>\n    <circle cx=\"420\" cy=\"140\" r=\"4\" fill=\"#10b981\"/>\n    <text x=\"410\" y=\"125\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">Digital Out</text>\n\n    <!-- Function Box -->\n    <rect x=\"50\" y=\"325\" width=\"340\" height=\"40\" fill=\"rgba(139,92,246,0.12)\" stroke=\"#8b5cf6\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"220\" y=\"350\" fill=\"#c084fc\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Schmitt Trigger يمنع الارتداد والضوضاء (No Chattering)</text>\n  </g>\n\n  <!-- Hysteresis Switching Curve -->\n  <g transform=\"translate(470, 25)\">\n    <text x=\"140\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Hysteresis Switching Curve (منحنى التباطؤ)</text>\n    <line x1=\"20\" y1=\"220\" x2=\"270\" y2=\"220\" stroke=\"#cbd5e1\" stroke-width=\"2\" marker-end=\"url(#arr)\"/>\n    <line x1=\"40\" y1=\"260\" x2=\"40\" y2=\"60\" stroke=\"#cbd5e1\" stroke-width=\"2\" marker-end=\"url(#arr)\"/>\n    <text x=\"270\" y=\"245\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">B (Field)</text>\n    <text x=\"35\" y=\"50\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">Output</text>\n\n    <!-- Digital Waveform with Hysteresis Loop -->\n    <path d=\"M 40 90 L 190 90 L 190 220 L 260 220\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" filter=\"url(#glow)\"/>\n    <path d=\"M 260 220 L 110 220 L 110 90 L 40 90\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" stroke-dasharray=\"4,4\"/>\n\n    <text x=\"45\" y=\"80\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">HIGH (Vcc)</text>\n    <text x=\"45\" y=\"210\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">LOW (0V)</text>\n\n    <line x1=\"190\" y1=\"90\" x2=\"190\" y2=\"220\" stroke=\"#f43f5e\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n    <text x=\"190\" y=\"240\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">B_op</text>\n\n    <line x1=\"110\" y1=\"90\" x2=\"110\" y2=\"220\" stroke=\"#06b6d4\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n    <text x=\"110\" y=\"240\" fill=\"#06b6d4\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">B_rp</text>\n\n    <rect x=\"20\" y=\"275\" width=\"250\" height=\"90\" fill=\"rgba(16,185,129,0.1)\" stroke=\"#10b981\" stroke-width=\"1.2\" rx=\"6\"/>\n    <text x=\"145\" y=\"300\" fill=\"#6ee7b7\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">B_op: نقطة التشغيل (Operate Point)</text>\n    <text x=\"145\" y=\"325\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">B_rp: نقطة الإطلاق (Release Point)</text>\n    <text x=\"145\" y=\"350\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">فرق Hysteresis = B_op - B_rp يمنع الاهتزاز</text>\n  </g>\n\n</svg>",
    "note": "يحول محفز شميت الإشارة التناظرية المتغيرة إلى نبضات رقمية مربعة قاطعة مع منع التردد الناتج عن الضوضاء.",
    "unit": "SET_D"
  },
  {
    "id": "DRAW_Q9",
    "title": "Corrugated Diaphragm Pressure Sensor (حساس الضغط بغشاء متموج ومقياس انفعال)",
    "question": "Draw the cross-section of a diaphragm-based fluid pressure sensor (corrugated type) and show where the strain gauge is placed. Label: diaphragm, corrugations, strain gauge, pressure inlet, and fixed housing.",
    "components": [
      "Fixed rigid housing",
      "Corrugated metallic diaphragm",
      "Concentric corrugations",
      "Bonded resistance strain gauges (Tension/Compression zones)",
      "Fluid pressure inlet port (P)",
      "Reference pressure chamber",
      "Output leads to Wheatstone bridge"
    ],
    "formula": "Strain ε ∝ Pressure P  ;  ΔR / R = G · ε",
    "diagramType": "Mechanical Cross-Section Diagram (قطاع ميكانيكي تركيبي)",
    "examSteps": [
      "1. ارسم الهيكل الصلب الخارجي (Rigid Housing) بجزأين علوي وسفلي مع فتحة دخول الضغط (Pressure Inlet) بالأسفل.",
      "2. ارسم الغشاء المعدني المتموج (Corrugated Diaphragm) ممتداً أفقياً ومثبتاً بإحكام عند الحواف (Clamped).",
      "3. وضح التموجات المتحدة المركز (Corrugations) على هيئة موجات منتظمة.",
      "4. ارسم مقياس الانفعال (Strain Gauge) ملصوقاً في مناطق الإجهاد العظمى فوق تموجات الغشاء.",
      "5. أخرج أسلاك التوصيل نحو قنطرة وتستون (Wheatstone Bridge).",
      "6. اكتب علاقة التحويل: ΔR/R = G * ε حيث يتناسب الانفعال طردياً مع الضغط P."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Corrugated Diaphragm Pressure Sensor Cross-Section\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(60, 25)\">\n    <text x=\"340\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">Corrugated Diaphragm Pressure Sensor Cross-Section</text>\n\n    <!-- Upper Body -->\n    <path d=\"M 80 70 L 600 70 L 600 130 L 520 130 L 520 100 L 160 100 L 160 130 L 80 130 Z\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\"/>\n    <text x=\"340\" y=\"120\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"12\" text-anchor=\"middle\">Reference Chamber (غرفة الضغط المرجعي / جوي)</text>\n\n    <!-- Lower Body with Pressure Inlet Port -->\n    <path d=\"M 80 190 L 160 190 L 160 270 L 290 270 L 290 340 L 390 340 L 390 270 L 520 270 L 520 190 L 600 190 L 600 290 L 80 290 Z\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\"/>\n    \n    <!-- Pressure Port Inlet -->\n    <line x1=\"340\" y1=\"380\" x2=\"340\" y2=\"290\" stroke=\"#f43f5e\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/>\n    <text x=\"340\" y=\"400\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Fluid Pressure In (P)</text>\n\n    <!-- Clamping Ends -->\n    <rect x=\"80\" y=\"150\" width=\"80\" height=\"20\" fill=\"#cbd5e1\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n    <rect x=\"520\" y=\"150\" width=\"80\" height=\"20\" fill=\"#cbd5e1\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n    <text x=\"120\" y=\"145\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">Clamped Rim</text>\n    <text x=\"560\" y=\"145\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">Clamped Rim</text>\n\n    <!-- Corrugated Metallic Wave Profile -->\n    <path d=\"M 160 160 Q 185 140 210 160 T 260 160 T 310 160 T 360 160 T 410 160 T 460 160 T 510 160 L 520 160\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"4\" filter=\"url(#glow)\"/>\n    <text x=\"210\" y=\"135\" fill=\"#f59e0b\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\">Corrugations (تموجات لزيادة المرونة)</text>\n\n    <!-- Bonded Strain Gauges -->\n    <rect x=\"245\" y=\"150\" width=\"30\" height=\"8\" fill=\"#10b981\" stroke=\"#fff\" stroke-width=\"1\" rx=\"2\"/>\n    <rect x=\"395\" y=\"150\" width=\"30\" height=\"8\" fill=\"#10b981\" stroke=\"#fff\" stroke-width=\"1\" rx=\"2\"/>\n    <text x=\"260\" y=\"140\" fill=\"#10b981\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Strain Gauge 1</text>\n    <text x=\"410\" y=\"140\" fill=\"#10b981\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Strain Gauge 2</text>\n\n    <!-- Electrical Lead Wires -->\n    <path d=\"M 260 150 L 260 90 L 300 90\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <path d=\"M 410 150 L 410 90 L 370 90\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\"/>\n    <circle cx=\"300\" cy=\"90\" r=\"3\" fill=\"#10b981\"/>\n    <circle cx=\"370\" cy=\"90\" r=\"3\" fill=\"#10b981\"/>\n    <text x=\"335\" y=\"85\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">To Wheatstone Bridge</text>\n\n    <!-- Deflection Arrow -->\n    <line x1=\"335\" y1=\"210\" x2=\"335\" y2=\"175\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n    <text x=\"345\" y=\"210\" fill=\"#f43f5e\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\">Deflection ∝ P</text>\n\n    <!-- Formula & Notes -->\n    <rect x=\"120\" y=\"310\" width=\"440\" height=\"50\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"340\" y=\"333\" fill=\"#6ee7b7\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">ΔR / R = G · ε  ;  Strain ε ∝ Applied Pressure P</text>\n    <text x=\"340\" y=\"350\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">التموجات (Corrugations) تزيد المدى الخطي وتمنع الإجهادات الزائدة</text>\n  </g>\n\n</svg>",
    "note": "تعطي التموجات (Corrugations) إزاحة خطية أكبر من الغشاء الأملس وتحمي الحساس من الإجهادات المركزة.",
    "unit": "SET_E"
  },
  {
    "id": "DRAW_Q10",
    "title": "Piezoelectric Accelerometer (مقياس التسارع الكهروضغطي)",
    "question": "Draw the construction of a piezoelectric accelerometer. Label: seismic mass, piezoelectric crystal, preload spring, damper, conductive coating, accelerometer housing, and vibrating base.",
    "components": [
      "Accelerometer outer housing",
      "Vibrating base & mounting stud",
      "Piezoelectric crystal (Quartz/PZT)",
      "Seismic mass (m)",
      "Preload spring",
      "Conductive electrode coatings",
      "Coaxial electrical output leads"
    ],
    "formula": "F = m · a  ;  Electric Charge q = d · F = d · m · a",
    "diagramType": "Sensor Cross-Section Diagram (قطاع تركيبي لمقياس التسارع)",
    "examSteps": [
      "1. ارسم قاعدة التثبيت السفلية (Vibrating Base) مع مسمار التثبيت (Mounting Stud).",
      "2. ارسم قرص البلورة الكهروضغطية (Piezoelectric Crystal) فوق القاعدة محاطاً بطبقتي توصيل (Electrodes).",
      "3. ارسم الكتلة الزلزالية القصورية (Seismic Mass m) فوق البلورة.",
      "4. ارسم زنبرك التحميل القبلي (Preload Spring) لضغط الكتلة بإحكام ضد البلورة.",
      "5. ارسم الغلاف الخارجي الواقي (Outer Housing) وأخرج سلكي الشحنة الناتجة.",
      "6. وضح بسهم التسارع a واكتب قانون نيوتن F = m * a وقانون الشحنة q = d * m * a."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Piezoelectric Accelerometer Construction\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(60, 25)\">\n    <text x=\"340\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">Piezoelectric Accelerometer Construction Cross-Section</text>\n\n    <!-- Outer Protective Housing -->\n    <path d=\"M 180 80 L 500 80 L 500 270 L 180 270 Z\" fill=\"rgba(14,23,38,0.8)\" stroke=\"#64748b\" stroke-width=\"2.5\" rx=\"6\"/>\n    <text x=\"340\" y=\"70\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"12\" text-anchor=\"middle\">Outer Housing Casing (الغلاف الخارجي)</text>\n\n    <!-- Preload Spring -->\n    <rect x=\"260\" y=\"95\" width=\"160\" height=\"25\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"1.5\" rx=\"4\"/>\n    <path d=\"M 270 107 L 410 107\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"6,3\"/>\n    <text x=\"340\" y=\"112\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Preload Spring (زنبرك التحميل القبلي)</text>\n\n    <!-- Seismic Mass (m) -->\n    <rect x=\"240\" y=\"125\" width=\"200\" height=\"50\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2.5\" rx=\"4\"/>\n    <text x=\"340\" y=\"155\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Seismic Mass (الكتلة القصورية m)</text>\n\n    <!-- Conductive Electrode Foil Top -->\n    <rect x=\"250\" y=\"177\" width=\"180\" height=\"5\" fill=\"#cbd5e1\" stroke=\"#fff\" stroke-width=\"1\"/>\n\n    <!-- Piezoelectric Crystal Element (Quartz / PZT) -->\n    <rect x=\"250\" y=\"184\" width=\"180\" height=\"35\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2.5\" rx=\"4\" filter=\"url(#glow)\"/>\n    <text x=\"340\" y=\"206\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Piezoelectric Crystal (البلورة الكهروضغطية)</text>\n\n    <!-- Conductive Electrode Foil Bottom & Base Stud -->\n    <rect x=\"250\" y=\"221\" width=\"180\" height=\"5\" fill=\"#cbd5e1\" stroke=\"#fff\" stroke-width=\"1\"/>\n\n    <!-- Base / Mounting Stud (Vibrating Base) -->\n    <path d=\"M 160 270 L 520 270 L 520 300 L 370 300 L 370 340 L 310 340 L 310 300 L 160 300 Z\" fill=\"url(#gradEmerald)\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    <text x=\"340\" y=\"290\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Rigid Base Mounting Stud (قاعدة التثبيت)</text>\n\n    <!-- Vibration Acceleration Arrow -->\n    <line x1=\"340\" y1=\"390\" x2=\"340\" y2=\"345\" stroke=\"#f43f5e\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/>\n    <text x=\"350\" y=\"380\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\">Acceleration (a)</text>\n\n    <!-- Electrical Output Coaxial Leads -->\n    <path d=\"M 430 179 L 560 179 L 560 150\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    <path d=\"M 430 223 L 560 223 L 560 190\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n    <circle cx=\"560\" cy=\"150\" r=\"4\" fill=\"#10b981\"/>\n    <circle cx=\"560\" cy=\"190\" r=\"4\" fill=\"#64748b\"/>\n    <text x=\"570\" y=\"175\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">Charge / Voltage Out</text>\n\n    <!-- Formulas Box -->\n    <rect x=\"120\" y=\"355\" width=\"440\" height=\"45\" fill=\"rgba(139,92,246,0.12)\" stroke=\"#8b5cf6\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"340\" y=\"382\" fill=\"#c084fc\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">F = m · a   |   Charge q = d · F = d · m · a</text>\n  </g>\n\n</svg>",
    "note": "عند حدوث تسارع، تؤثر الكتلة القصورية بقوة F = m*a على البلورة، فتولد شحنة كهربائية q تتناسب طردياً مع التسارع.",
    "unit": "SET_E"
  },
  {
    "id": "DRAW_Q11",
    "title": "Force-Sensitive Resistor (FSR) Voltage Divider (دائرة مقسم الجهد لحساس القوة FSR)",
    "question": "Draw the force-sensitive resistor (FSR) voltage divider circuit used for force-to-voltage conversion with a 100 kΩ fixed resistor and a +5 V supply. Label the output node and indicate what happens to Vout when force increases.",
    "components": [
      "+5V DC power supply",
      "FSR sensor element (R_FSR)",
      "Fixed resistor (100 kΩ pull-down)",
      "Analog output node (Vout to ADC)",
      "Ground connection (0V)",
      "Response curve showing Vout rising with force"
    ],
    "formula": "V_out = V_cc · [ R_fixed / (R_FSR + R_fixed) ]  ;  As Force F ↑ ==> R_FSR ↓ ==> V_out ↑",
    "diagramType": "Sensor Interface Circuit & Response Curve",
    "examSteps": [
      "1. ارسم خط التغذية العلوي بجهد +5V والأرضي السفلي GND.",
      "2. ارسم حساس القوة FSR في الأعلى وسهم القوة الضاغطة F المؤثرة عليه.",
      "3. ارسم المقاومة الثابتة R_fixed بقيمة 100 kΩ في الأسفل موصولة بالأرضي.",
      "4. أخرج طرف الجهد الناتج Vout من نقطة الاتصال بين الـ FSR والمقاومة الثابتة.",
      "5. ارسم المنحنى البياني (Vout مقابل Force F) كمنحنى صاعد يقترب تدريجياً من 5V.",
      "6. اكتب المعادلة: Vout = 5V * [100k / (R_FSR + 100k)]."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"FSR Force-to-Voltage Divider Circuit\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(30, 25)\">\n    <text x=\"190\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">FSR Voltage Divider Interface Circuit</text>\n\n    <!-- Top Rail +5V -->\n    <line x1=\"40\" y1=\"60\" x2=\"190\" y2=\"60\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n    <circle cx=\"40\" cy=\"60\" r=\"5\" fill=\"#f43f5e\"/>\n    <text x=\"35\" y=\"45\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">+5V (VCC)</text>\n\n    <!-- FSR Sensor Element -->\n    <line x1=\"190\" y1=\"60\" x2=\"190\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n    <rect x=\"165\" y=\"90\" width=\"50\" height=\"85\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"4\"/>\n    <text x=\"190\" y=\"125\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">FSR</text>\n    <text x=\"190\" y=\"145\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">(Sensor)</text>\n\n    <!-- Force Arrow -->\n    <line x1=\"100\" y1=\"130\" x2=\"160\" y2=\"130\" stroke=\"#38bdf8\" stroke-width=\"3\" marker-end=\"url(#arr)\"/>\n    <text x=\"90\" y=\"125\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"end\">Applied Force (F)</text>\n\n    <!-- Output Tap Node Vout -->\n    <line x1=\"190\" y1=\"175\" x2=\"190\" y2=\"205\" stroke=\"#10b981\" stroke-width=\"3\"/>\n    <line x1=\"190\" y1=\"190\" x2=\"310\" y2=\"190\" stroke=\"#10b981\" stroke-width=\"3.5\" filter=\"url(#glow)\"/>\n    <circle cx=\"310\" cy=\"190\" r=\"5\" fill=\"#10b981\"/>\n    <text x=\"320\" y=\"195\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"15\" font-weight=\"bold\">Vout (to ADC)</text>\n\n    <!-- Fixed Resistor (100 kΩ) -->\n    <rect x=\"165\" y=\"205\" width=\"50\" height=\"85\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"4\"/>\n    <text x=\"190\" y=\"240\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">R_fixed</text>\n    <text x=\"190\" y=\"260\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">100 kΩ</text>\n\n    <!-- Bottom GND -->\n    <line x1=\"190\" y1=\"290\" x2=\"190\" y2=\"330\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n    <line x1=\"40\" y1=\"330\" x2=\"190\" y2=\"330\" stroke=\"#64748b\" stroke-width=\"3\"/>\n    <circle cx=\"40\" cy=\"330\" r=\"5\" fill=\"#64748b\"/>\n    <text x=\"35\" y=\"355\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">GND (0V)</text>\n\n    <!-- Formula Box -->\n    <rect x=\"40\" y=\"360\" width=\"310\" height=\"45\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"195\" y=\"388\" fill=\"#6ee7b7\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Vout = 5V · [ 100k / (R_FSR + 100k) ]</text>\n  </g>\n\n  <!-- Characteristic Curve Vout vs Force -->\n  <g transform=\"translate(460, 25)\">\n    <text x=\"140\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Vout vs Applied Force Response</text>\n    <line x1=\"30\" y1=\"260\" x2=\"270\" y2=\"260\" stroke=\"#cbd5e1\" stroke-width=\"2\" marker-end=\"url(#arr)\"/>\n    <line x1=\"30\" y1=\"260\" x2=\"30\" y2=\"60\" stroke=\"#cbd5e1\" stroke-width=\"2\" marker-end=\"url(#arr)\"/>\n    <text x=\"270\" y=\"285\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">Force F (N)</text>\n    <text x=\"25\" y=\"50\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">Vout (V)</text>\n\n    <!-- Non-linear rising curve -->\n    <path d=\"M 30 260 Q 90 120 250 85\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3.5\" filter=\"url(#glow)\"/>\n    <line x1=\"30\" y1=\"75\" x2=\"250\" y2=\"75\" stroke=\"#f43f5e\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    <text x=\"25\" y=\"80\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\">+5V</text>\n\n    <rect x=\"20\" y=\"300\" width=\"250\" height=\"65\" fill=\"rgba(6,182,212,0.12)\" stroke=\"#06b6d4\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"145\" y=\"325\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">زيادة القوة F ➔ انخفاض مقاومة FSR</text>\n    <text x=\"145\" y=\"347\" fill=\"#6ee7b7\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">مما يؤدي إلى ارتفاع جهد الخرج Vout نحو 5V</text>\n  </g>\n\n</svg>",
    "note": "تقل مقاومة FSR بشكل كبير مع زيادة القوة، مما يرفع جهد الخرج Vout طردياً ويسمح بقراءته بسهولة عبر الـ ADC.",
    "unit": "SET_E"
  },
  {
    "id": "DRAW_Q12",
    "title": "Closed Vessel Level via DP Cell (قياس مستوى السائل في خزان مغلق بخلية الضغط التفاضلي)",
    "question": "Draw a schematic of the liquid level measurement system for a closed vessel using a differential pressure cell (DP), showing both connection points and labelling the DP cell, vessel, liquid surface, and gas space.",
    "components": [
      "Closed pressurized process vessel",
      "Liquid column (Height h, Density ρ)",
      "Vapor space head (P_gas)",
      "High-pressure tapping (HP leg at vessel base)",
      "Low-pressure tapping (LP leg at top gas space)",
      "Differential Pressure (DP) Cell transmitter",
      "Output signal (4-20 mA)"
    ],
    "formula": "ΔP = P_high - P_low = (P_gas + ρ·g·h) - P_gas = ρ·g·h  ==>  h = ΔP / (ρ·g)",
    "diagramType": "Process Instrumentation Diagram (مخطط أجهزة القياس والعمليات)",
    "examSteps": [
      "1. ارسم الخزان المغلق (Closed Vessel) محتوياً على سائل بارتفاع h ومساحة غاز في الأعلى (P_gas).",
      "2. ارسم وصلة الضغط العالي (HP Tap) من أسفل قاع الخزان متجهة إلى طرف HP في خلية DP.",
      "3. ارسم وصلة الضغط المنخفض (LP Tap) من أعلى الخزان في مساحة الغاز متجهة إلى طرف LP في خلية DP.",
      "4. ارسم صندوق خلية الضغط التفاضلي (DP Cell Transmitter) مع سهم الخرج 4-20 mA.",
      "5. اكتب معادلة الاتزان: ΔP = P_high - P_low = ρ * g * h.",
      "6. وضح أن طرح P_gas يلغي تأثير ضغط البخار ويعطي الارتفاع h مباشرة."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Closed Vessel Liquid Level via DP Cell\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(60, 25)\">\n    <text x=\"340\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">Liquid Level Measurement in Closed Vessel via Differential Pressure (DP) Cell</text>\n\n    <!-- Closed Pressurized Vessel -->\n    <rect x=\"140\" y=\"60\" width=\"220\" height=\"260\" fill=\"rgba(14,23,38,0.8)\" stroke=\"#cbd5e1\" stroke-width=\"3\" rx=\"14\"/>\n    <text x=\"250\" y=\"85\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Closed Vessel (خزان مغلق)</text>\n\n    <!-- Gas / Vapor Space -->\n    <text x=\"250\" y=\"125\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Vapor Space (P_gas)</text>\n\n    <!-- Liquid in Vessel (Height h) -->\n    <path d=\"M 140 160 Q 195 152 250 160 T 360 160 L 360 306 Q 360 320 346 320 L 154 320 Q 140 320 140 306 Z\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\"/>\n    <text x=\"250\" y=\"235\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Liquid (Density ρ)</text>\n\n    <!-- Height Dimension h -->\n    <line x1=\"110\" y1=\"160\" x2=\"110\" y2=\"320\" stroke=\"#10b981\" stroke-width=\"2\" marker-start=\"url(#arrG)\" marker-end=\"url(#arrG)\"/>\n    <text x=\"95\" y=\"245\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"end\">h</text>\n\n    <!-- High-Pressure Tap (Bottom) -->\n    <line x1=\"360\" y1=\"300\" x2=\"440\" y2=\"300\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n    <line x1=\"440\" y1=\"300\" x2=\"440\" y2=\"230\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n    <line x1=\"440\" y1=\"230\" x2=\"490\" y2=\"230\" stroke=\"#f43f5e\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/>\n    <text x=\"430\" y=\"320\" fill=\"#f43f5e\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\">HP Leg (P_high = P_gas + ρgh)</text>\n\n    <!-- Low-Pressure Tap (Top Vapor Space) -->\n    <line x1=\"360\" y1=\"100\" x2=\"470\" y2=\"100\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n    <line x1=\"470\" y1=\"100\" x2=\"470\" y2=\"190\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n    <line x1=\"470\" y1=\"190\" x2=\"490\" y2=\"190\" stroke=\"#38bdf8\" stroke-width=\"3\" marker-end=\"url(#arr)\"/>\n    <text x=\"475\" y=\"90\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\">LP Leg (P_low = P_gas)</text>\n\n    <!-- DP Cell Transmitter -->\n    <rect x=\"490\" y=\"160\" width=\"130\" height=\"100\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2.5\" rx=\"6\" filter=\"url(#glow)\"/>\n    <text x=\"555\" y=\"195\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">DP Cell</text>\n    <text x=\"555\" y=\"215\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">Transmitter</text>\n    <text x=\"555\" y=\"240\" fill=\"#c084fc\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">ΔP = ρ · g · h</text>\n\n    <!-- Electrical Output -->\n    <line x1=\"620\" y1=\"210\" x2=\"680\" y2=\"210\" stroke=\"#10b981\" stroke-width=\"3.5\" marker-end=\"url(#arrG)\"/>\n    <text x=\"685\" y=\"215\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">4-20 mA / Level</text>\n\n    <!-- Equation Box -->\n    <rect x=\"120\" y=\"345\" width=\"460\" height=\"50\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"350\" y=\"368\" fill=\"#6ee7b7\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">ΔP = P_high - P_low = (P_gas + ρgh) - P_gas = ρ·g·h  ==>  h = ΔP / (ρ·g)</text>\n    <text x=\"350\" y=\"386\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">طرح ضغط الغاز P_gas يلغي تأثير الضغط الداخلي ويقيس ارتفاع السائل h بدقة</text>\n  </g>\n\n</svg>",
    "note": "تلغي خلية الضغط التفاضلي DP ضغط الغاز العلوي تلقائياً لتعزل الضغط الهيدروستاتيكي الناتج عن عمود السائل فقط.",
    "unit": "SET_F"
  },
  {
    "id": "DRAW_Q13",
    "title": "NTC Thermistor with Arduino UNO (توصيل الثرمستور NTC بمقسم جهد مع أردوينو)",
    "question": "Draw the NTC thermistor voltage divider circuit connected to the analogue input of an Arduino UNO. Label all components, supply voltage, and output pin.",
    "components": [
      "Arduino UNO Board",
      "5V Power Pin",
      "GND Pin",
      "Analog Input Pin A0",
      "NTC Thermistor (10 kΩ @ 25°C)",
      "Fixed precision resistor (10 kΩ)",
      "Voltage divider intermediate node"
    ],
    "formula": "V_A0 = 5V · [ R_fixed / (R_NTC + R_fixed) ]  ;  ADC_Value = (V_A0 / 5V) · 1023",
    "diagramType": "Microcontroller Circuit Interfacing (دائرة ربط مع المتحكم)",
    "examSteps": [
      "1. ارسم لوحة الأردوينو (Arduino UNO) وحدد أطراف: 5V و GND والطرف التناظري A0.",
      "2. ارسم دائرة مقسم الجهد (Voltage Divider): طرف الثرمستور NTC بالأعلى متصل بـ 5V.",
      "3. ارسم المقاومة الثابتة (10 kΩ) بالأسفل متصلة بالـ GND.",
      "4. صل النقطة الوسطى بين الثرمستور والمقاومة بالطرف التناظري A0.",
      "5. اكتب معادلة الجهد: V_A0 = 5V * [10k / (R_NTC + 10k)].",
      "6. وضح أنه عند ارتفاع درجة الحرارة T، تقل مقاومة NTC فيزداد الجهد عند A0."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"NTC Thermistor Voltage Divider Interfaced with Arduino UNO\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(40, 25)\">\n    <text x=\"360\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">NTC Thermistor Voltage Divider Interfaced with Arduino UNO</text>\n\n    <!-- Arduino UNO Board Symbol (Left) -->\n    <g transform=\"translate(60, 60)\">\n      <rect x=\"0\" y=\"0\" width=\"220\" height=\"260\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2.5\" rx=\"10\"/>\n      <text x=\"110\" y=\"35\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Arduino UNO</text>\n\n      <!-- ATmega328P Chip -->\n      <rect x=\"45\" y=\"70\" width=\"130\" height=\"40\" fill=\"#080f1d\" stroke=\"#38bdf8\" stroke-width=\"1.5\" rx=\"4\"/>\n      <text x=\"110\" y=\"95\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">ATmega328P</text>\n\n      <!-- Pin Labels & Nodes -->\n      <!-- 5V -->\n      <circle cx=\"205\" cy=\"140\" r=\"5\" fill=\"#f43f5e\"/>\n      <text x=\"190\" y=\"145\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"end\">5V</text>\n\n      <!-- A0 -->\n      <circle cx=\"205\" cy=\"190\" r=\"5\" fill=\"#10b981\"/>\n      <text x=\"190\" y=\"195\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"end\">A0</text>\n\n      <!-- GND -->\n      <circle cx=\"205\" cy=\"240\" r=\"5\" fill=\"#64748b\"/>\n      <text x=\"190\" y=\"245\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"end\">GND</text>\n    </g>\n\n    <!-- Voltage Divider Network (Right) -->\n    <g transform=\"translate(370, 60)\">\n      <!-- 5V Wire -->\n      <line x1=\"-105\" y1=\"140\" x2=\"60\" y2=\"140\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n      <line x1=\"60\" y1=\"140\" x2=\"60\" y2=\"40\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n      <line x1=\"60\" y1=\"40\" x2=\"160\" y2=\"40\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n\n      <!-- NTC Thermistor (R_NTC) -->\n      <line x1=\"160\" y1=\"40\" x2=\"160\" y2=\"70\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n      <rect x=\"135\" y=\"70\" width=\"50\" height=\"75\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"4\"/>\n      <line x1=\"125\" y1=\"135\" x2=\"195\" y2=\"80\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      <text x=\"200\" y=\"110\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">R_NTC (10k)</text>\n      <text x=\"200\" y=\"125\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"10\">-t° (Negative Coeff)</text>\n\n      <!-- Center Node (Analog Read to A0) -->\n      <line x1=\"160\" y1=\"145\" x2=\"160\" y2=\"175\" stroke=\"#10b981\" stroke-width=\"3\"/>\n      <circle cx=\"160\" cy=\"160\" r=\"5\" fill=\"#10b981\"/>\n      <path d=\"M 160 160 L 60 160 L 60 190 L -105 190\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\" filter=\"url(#glow)\"/>\n      <text x=\"80\" y=\"180\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">V_A0</text>\n\n      <!-- Fixed Resistor (10 kΩ) -->\n      <rect x=\"135\" y=\"175\" width=\"50\" height=\"75\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"4\"/>\n      <text x=\"200\" y=\"215\" fill=\"#06b6d4\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">R_fixed (10k)</text>\n\n      <!-- GND Wire -->\n      <line x1=\"160\" y1=\"250\" x2=\"160\" y2=\"280\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n      <line x1=\"160\" y1=\"280\" x2=\"60\" y2=\"280\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n      <line x1=\"60\" y1=\"280\" x2=\"60\" y2=\"240\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n      <line x1=\"60\" y1=\"240\" x2=\"-105\" y2=\"240\" stroke=\"#64748b\" stroke-width=\"3\"/>\n    </g>\n\n    <!-- Formula Box -->\n    <rect x=\"120\" y=\"345\" width=\"480\" height=\"45\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"360\" y=\"372\" fill=\"#6ee7b7\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">V_A0 = 5V · [ 10k / (R_NTC + 10k) ]  ;  Temp T ↑ ==> R_NTC ↓ ==> V_A0 ↑</text>\n  </g>\n\n</svg>",
    "note": "يستخدم الثرمستور NTC مقسماً للجهد لتحويل التغير في المقاومة إلى تغير خطي في الجهد يمكن قراءته عبر ADC الأردوينو.",
    "unit": "SET_F"
  },
  {
    "id": "DRAW_Q14",
    "title": "LM35 Temperature Sensor with Arduino UNO (حساس الحرارة الخطي LM35 مع أردوينو)",
    "question": "Draw the LM35 thermodiode temperature sensor circuit connected to an Arduino UNO analogue input. Label VCC (+5 V), GND, and output connections.",
    "components": [
      "LM35 Precision Centigrade Sensor (TO-92 Package)",
      "Pin 1: +Vs (+5V supply)",
      "Pin 2: Vout (Linear Analog Output)",
      "Pin 3: GND (Ground)",
      "Arduino UNO Board",
      "Analog Input Pin A0"
    ],
    "formula": "V_out = 10 mV / °C  ;  Temperature (°C) = V_out (mV) / 10",
    "diagramType": "Sensor Wiring Diagram (مخطط التوصيل الكهربي للحساس)",
    "examSteps": [
      "1. ارسم لوحة الأردوينو موضحاً أطراف: 5V و GND و A0.",
      "2. ارسم شكل غلاف حساس LM35 (TO-92 Package) بثلاثة أطراف واضحة.",
      "3. الطرف 1 (Pin 1: +Vs) وصله بطرف 5V في الأردوينو.",
      "4. الطرف 2 (Pin 2: Vout) وصله بالطرف التناظري A0 في الأردوينو.",
      "5. الطرف 3 (Pin 3: GND) وصله بالطرف الأرضي GND.",
      "6. اكتب المعادلة المميزة للحساس: Vout = 10 mV/°C و Temp = Vout(mV) / 10."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"LM35 Precision Analog Temperature Sensor with Arduino UNO\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(50, 25)\">\n    <text x=\"350\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">LM35 Precision Analog Temperature Sensor Interfaced with Arduino UNO</text>\n\n    <!-- Arduino UNO (Left) -->\n    <g transform=\"translate(60, 60)\">\n      <rect x=\"0\" y=\"0\" width=\"220\" height=\"260\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2.5\" rx=\"10\"/>\n      <text x=\"110\" y=\"35\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Arduino UNO</text>\n\n      <!-- Pin Nodes -->\n      <!-- 5V -->\n      <circle cx=\"205\" cy=\"90\" r=\"5\" fill=\"#f43f5e\"/>\n      <text x=\"190\" y=\"95\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"end\">5V (Power)</text>\n\n      <!-- A0 -->\n      <circle cx=\"205\" cy=\"160\" r=\"5\" fill=\"#10b981\"/>\n      <text x=\"190\" y=\"165\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"end\">A0 (Analog In)</text>\n\n      <!-- GND -->\n      <circle cx=\"205\" cy=\"230\" r=\"5\" fill=\"#64748b\"/>\n      <text x=\"190\" y=\"235\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"end\">GND</text>\n    </g>\n\n    <!-- LM35 TO-92 Sensor Package (Right) -->\n    <g transform=\"translate(420, 80)\">\n      <!-- Package Body -->\n      <path d=\"M 40 40 L 160 40 A 60 60 0 0 1 160 160 L 40 160 Z\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n      <text x=\"90\" y=\"95\" fill=\"#04130e\" font-family=\"JetBrains Mono\" font-size=\"16\" font-weight=\"bold\">LM35</text>\n      <text x=\"90\" y=\"120\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\">TO-92 Package</text>\n\n      <!-- Pin 1 (+Vs) -->\n      <line x1=\"40\" y1=\"70\" x2=\"-155\" y2=\"70\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n      <circle cx=\"40\" cy=\"70\" r=\"4\" fill=\"#f43f5e\"/>\n      <text x=\"30\" y=\"65\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"end\">Pin 1 (+Vs)</text>\n\n      <!-- Pin 2 (Vout) -->\n      <line x1=\"40\" y1=\"140\" x2=\"-155\" y2=\"140\" stroke=\"#10b981\" stroke-width=\"3.5\" filter=\"url(#glow)\"/>\n      <circle cx=\"40\" cy=\"140\" r=\"4\" fill=\"#10b981\"/>\n      <text x=\"30\" y=\"135\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"end\">Pin 2 (Vout)</text>\n\n      <!-- Pin 3 (GND) -->\n      <line x1=\"40\" y1=\"210\" x2=\"-155\" y2=\"210\" stroke=\"#64748b\" stroke-width=\"3\"/>\n      <circle cx=\"40\" cy=\"210\" r=\"4\" fill=\"#64748b\"/>\n      <text x=\"30\" y=\"205\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"end\">Pin 3 (GND)</text>\n    </g>\n\n    <!-- Formula Box -->\n    <rect x=\"100\" y=\"345\" width=\"500\" height=\"50\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"350\" y=\"368\" fill=\"#6ee7b7\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">V_out = 10 mV / °C   |   Temperature (°C) = V_out (in mV) / 10</text>\n    <text x=\"350\" y=\"386\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">معايرة خطية دقيقة مباشرة بدون الحاجة لمقسم جهد خارجي (Linear 10 mV/°C)</text>\n  </g>\n\n</svg>",
    "note": "يتميز LM35 بخرج خطي معاير بدقة 10 ملي فولت لكل درجة مئوية واحدة (مثال: عند 25°C يكون الخرج 250 mV).",
    "unit": "SET_G"
  },
  {
    "id": "DRAW_Q15",
    "title": "MAX6675 Thermocouple SPI Interface (توصيل موديول المزدوجة الحرارية MAX6675 مع أردوينو)",
    "question": "Draw the MAX6675 thermocouple module connected to an Arduino UNO, clearly showing the three SPI signal connections: SCK (Pin 6), CS (Pin 5), and SO (Pin 4), as well as power connections.",
    "components": [
      "K-Type Thermocouple probe (+ / -)",
      "MAX6675 Cold-Junction Compensated Digitizer Module",
      "SPI Pins: SCK (Pin 6), CS (Pin 5), SO (Pin 4)",
      "Power Pins: VCC (+5V), GND",
      "Arduino UNO Board with Digital I/O"
    ],
    "formula": "12-bit SPI Serial Transmission (Resolution 0.25°C, Range 0°C to 1024°C)",
    "diagramType": "Digital Bus Interconnection (مخطط توصيل الناقل التسلسلي SPI)",
    "examSteps": [
      "1. ارسم مسبار المزدوجة الحرارية (K-Type Probe) بطرفين موجب وسالب (+ / -).",
      "2. ارسم موديول MAX6675 في المنتصف موضحاً طرفي الدخل T+ و T-.",
      "3. ارسم لوحة الأردوينو على اليمين وحدد الأطراف: 5V, GND, Pin 6, Pin 5, Pin 4.",
      "4. وصل خط التغذية VCC بـ 5V وخط الأرضي GND بـ GND.",
      "5. وصل خطوط بروتوكول SPI الثلاثة بوضوح:",
      "   - خط الساعة SCK بالطرف الرقمي Pin 6.",
      "   - خط اختيار الشريحة CS بالطرف الرقمي Pin 5.",
      "   - خط خروج البيانات التسلسلية SO بالطرف الرقمي Pin 4."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"MAX6675 Thermocouple Module SPI Interface with Arduino UNO\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(30, 25)\">\n    <text x=\"370\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">MAX6675 Thermocouple Module Interfaced to Arduino UNO via SPI</text>\n\n    <!-- K-Type Thermocouple Probe (Far Left) -->\n    <g transform=\"translate(40, 110)\">\n      <rect x=\"0\" y=\"40\" width=\"80\" height=\"70\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"6\"/>\n      <text x=\"40\" y=\"70\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">K-Type</text>\n      <text x=\"40\" y=\"88\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Probe</text>\n      <line x1=\"80\" y1=\"60\" x2=\"130\" y2=\"60\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n      <line x1=\"80\" y1=\"90\" x2=\"130\" y2=\"90\" stroke=\"#06b6d4\" stroke-width=\"2.5\"/>\n      <text x=\"105\" y=\"52\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">+</text>\n      <text x=\"105\" y=\"105\" fill=\"#06b6d4\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">-</text>\n    </g>\n\n    <!-- MAX6675 Module (Center) -->\n    <g transform=\"translate(170, 70)\">\n      <rect x=\"0\" y=\"0\" width=\"180\" height=\"230\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2.5\" rx=\"8\"/>\n      <text x=\"90\" y=\"30\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">MAX6675 Module</text>\n      <text x=\"90\" y=\"48\" fill=\"#c084fc\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">Cold-Junction Comp ADC</text>\n\n      <!-- Input Terminals -->\n      <circle cx=\"0\" cy=\"100\" r=\"4\" fill=\"#f43f5e\"/>\n      <circle cx=\"0\" cy=\"130\" r=\"4\" fill=\"#06b6d4\"/>\n      <text x=\"10\" y=\"105\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">T+</text>\n      <text x=\"10\" y=\"135\" fill=\"#06b6d4\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">T-</text>\n\n      <!-- SPI Output Header (Right side of module) -->\n      <!-- VCC -->\n      <circle cx=\"180\" cy=\"65\" r=\"4\" fill=\"#f43f5e\"/>\n      <text x=\"170\" y=\"70\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\">VCC</text>\n\n      <!-- GND -->\n      <circle cx=\"180\" cy=\"95\" r=\"4\" fill=\"#64748b\"/>\n      <text x=\"170\" y=\"100\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\">GND</text>\n\n      <!-- SCK -->\n      <circle cx=\"180\" cy=\"125\" r=\"4\" fill=\"#f59e0b\"/>\n      <text x=\"170\" y=\"130\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\">SCK (Clk)</text>\n\n      <!-- CS -->\n      <circle cx=\"180\" cy=\"155\" r=\"4\" fill=\"#10b981\"/>\n      <text x=\"170\" y=\"160\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\">CS (Select)</text>\n\n      <!-- SO -->\n      <circle cx=\"180\" cy=\"185\" r=\"4\" fill=\"#38bdf8\"/>\n      <text x=\"170\" y=\"190\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\">SO (Data)</text>\n    </g>\n\n    <!-- Arduino UNO (Right) -->\n    <g transform=\"translate(480, 50)\">\n      <rect x=\"0\" y=\"0\" width=\"220\" height=\"260\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2.5\" rx=\"10\"/>\n      <text x=\"110\" y=\"30\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Arduino UNO</text>\n\n      <!-- Pin Nodes on Left Edge of UNO -->\n      <!-- 5V -->\n      <circle cx=\"0\" cy=\"85\" r=\"4\" fill=\"#f43f5e\"/>\n      <text x=\"12\" y=\"90\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">5V</text>\n\n      <!-- GND -->\n      <circle cx=\"0\" cy=\"115\" r=\"4\" fill=\"#64748b\"/>\n      <text x=\"12\" y=\"120\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">GND</text>\n\n      <!-- Pin 6 (SCK) -->\n      <circle cx=\"0\" cy=\"145\" r=\"4\" fill=\"#f59e0b\"/>\n      <text x=\"12\" y=\"150\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">Pin 6 (SCK)</text>\n\n      <!-- Pin 5 (CS) -->\n      <circle cx=\"0\" cy=\"175\" r=\"4\" fill=\"#10b981\"/>\n      <text x=\"12\" y=\"180\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">Pin 5 (CS)</text>\n\n      <!-- Pin 4 (SO) -->\n      <circle cx=\"0\" cy=\"205\" r=\"4\" fill=\"#38bdf8\"/>\n      <text x=\"12\" y=\"210\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">Pin 4 (SO)</text>\n    </g>\n\n    <!-- Connecting Wires between Module and UNO -->\n    <path d=\"M 350 135 L 480 135\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2\"/>\n    <path d=\"M 350 165 L 480 165\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <path d=\"M 350 195 L 480 195\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n    <path d=\"M 350 225 L 480 225\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    <path d=\"M 350 255 L 480 255\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n\n    <!-- Bottom SPI Info Box -->\n    <rect x=\"80\" y=\"330\" width=\"580\" height=\"50\" fill=\"rgba(139,92,246,0.12)\" stroke=\"#8b5cf6\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"370\" y=\"352\" fill=\"#c084fc\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">3-Wire SPI Protocol: SCK (Clock: Pin 6) | CS (Select: Pin 5) | SO (MISO Data: Pin 4)</text>\n    <text x=\"370\" y=\"370\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">يقوم الموديول بالتعويض عن نقطة الوصل الباردة والتحويل الرقمي بدقة 12-bit (0.25°C Resolution)</text>\n  </g>\n\n</svg>",
    "note": "يحول MAX6675 جهد المزدوجة الحرارية الضعيف بالملي فولت إلى بيانات رقمية 12-bit مباشرة مع تعويض الوصلة الباردة.",
    "unit": "SET_F"
  },
  {
    "id": "DRAW_Q16",
    "title": "Incremental Optical Encoder Disc (قرص المشفر البصري التراكمي ومسارات الطور)",
    "question": "Draw the construction of an incremental optical encoder disc, showing: the inner single-hole index track, two outer offset tracks, LED source, and photodetector. Indicate how direction of rotation is determined.",
    "components": [
      "Slotted code wheel disc",
      "Track A (Outer, N slots)",
      "Track B (Quadrature, 90° phase offset)",
      "Track Z / Index (Single reference slot per revolution)",
      "Infrared LED source",
      "Photodetector receiver",
      "CW and CCW phase lead/lag waveforms"
    ],
    "formula": "Angular Resolution = 360° / N   |   Direction: A leads B (CW), B leads A (CCW)",
    "diagramType": "Optical Encoder Construction & Waveform Timing (تركيب المشفر ومخطط الطور)",
    "examSteps": [
      "1. ارسم قرص المشفر الدوار (Encoder Disc) بثلاثة مسارات دائرية متحدة المركز.",
      "2. المسار الخارجي (Track A) يحوي N فتحة متساوية لتوليد النبضات وسرعة الدوران.",
      "3. المسار الأوسط (Track B) مزاح بفرق طور مكاني 90° كهربائية بالنسبة لـ Track A.",
      "4. المسار الداخلي (Track Z / Index) يحوي فتحة واحدة مفردة كمرجع لدورة كاملة 360°.",
      "5. ارسم وحدة الباعث والمستقبل الضوئي (IR LED & Photodetector).",
      "6. ارسم إشارتي الخرج المربعتين ووضح أنه في اتجاه عقارب الساعة CW تسبق الإشارة A الإشارة B بـ 90° والعكس في CCW."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Incremental Optical Encoder Disc and Quadrature Tracks\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(30, 25)\">\n    <text x=\"200\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Incremental Optical Encoder Disc Construction</text>\n\n    <!-- Encoder Disc Top-Down View -->\n    <g transform=\"translate(200, 165)\">\n      <!-- Outer Disc Body -->\n      <circle cx=\"0\" cy=\"0\" r=\"105\" fill=\"rgba(255,255,255,0.03)\" stroke=\"#cbd5e1\" stroke-width=\"2.5\"/>\n      <circle cx=\"0\" cy=\"0\" r=\"25\" fill=\"#080f1d\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <text x=\"0\" y=\"5\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"10\" text-anchor=\"middle\">Shaft</text>\n\n      <!-- Track A (Outer: N Slots) -->\n      <circle cx=\"0\" cy=\"0\" r=\"92\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"14\" stroke-dasharray=\"8,8\"/>\n      <text x=\"0\" y=\"-87\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Track A (N slots)</text>\n\n      <!-- Track B (Middle: 90° Phase Offset) -->\n      <circle cx=\"0\" cy=\"0\" r=\"70\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"14\" stroke-dasharray=\"8,8\" transform=\"rotate(4 0 0)\"/>\n      <text x=\"0\" y=\"-65\" fill=\"#04130e\" font-family=\"JetBrains Mono\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">Track B (90° offset)</text>\n\n      <!-- Index Track Z (Inner: 1 Single Slot) -->\n      <circle cx=\"0\" cy=\"0\" r=\"48\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"10\"/>\n      <rect x=\"-4\" y=\"-53\" width=\"8\" height=\"10\" fill=\"#10b981\"/>\n      <text x=\"0\" y=\"-40\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">Track Z (Index)</text>\n    </g>\n\n    <!-- Optical Sensor Head -->\n    <rect x=\"290\" y=\"55\" width=\"60\" height=\"50\" fill=\"url(#gradRose)\" stroke=\"#f43f5e\" stroke-width=\"2\" rx=\"4\"/>\n    <text x=\"320\" y=\"77\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">IR LED &amp;</text>\n    <text x=\"320\" y=\"93\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Photo-sensor</text>\n\n    <!-- Formula Box Under Left -->\n    <rect x=\"40\" y=\"300\" width=\"320\" height=\"45\" fill=\"rgba(6,182,212,0.12)\" stroke=\"#06b6d4\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"200\" y=\"328\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Angular Resolution = 360° / N</text>\n  </g>\n\n  <!-- Quadrature Waveforms (Right) -->\n  <g transform=\"translate(460, 25)\">\n    <text x=\"140\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Quadrature Phase Waveforms</text>\n\n    <!-- CW Rotation: A leads B by 90° -->\n    <text x=\"20\" y=\"60\" fill=\"#10b981\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\">Clockwise (CW): Track A leads B by 90°</text>\n    <text x=\"20\" y=\"85\" fill=\"#06b6d4\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">Ch A:</text>\n    <path d=\"M 60 80 L 90 80 L 90 65 L 120 65 L 120 80 L 150 80 L 150 65 L 180 65 L 180 80 L 210 80 L 210 65 L 240 65\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"2.5\"/>\n    <text x=\"20\" y=\"115\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">Ch B:</text>\n    <path d=\"M 60 110 L 75 110 L 75 95 L 105 95 L 105 110 L 135 110 L 135 95 L 165 95 L 165 110 L 195 110 L 195 95 L 225 95\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n\n    <!-- CCW Rotation: B leads A by 90° -->\n    <text x=\"20\" y=\"160\" fill=\"#f43f5e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\">Counter-Clockwise (CCW): B leads A</text>\n    <text x=\"20\" y=\"185\" fill=\"#06b6d4\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">Ch A:</text>\n    <path d=\"M 60 180 L 75 180 L 75 165 L 105 165 L 105 180 L 135 180 L 135 165 L 165 165 L 165 180 L 195 180 L 195 165 L 225 165\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"2.5\"/>\n    <text x=\"20\" y=\"215\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">Ch B:</text>\n    <path d=\"M 60 210 L 90 210 L 90 195 L 120 195 L 120 210 L 150 210 L 150 195 L 180 195 L 180 210 L 210 210 L 210 195 L 240 195\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n\n    <!-- Index Z pulse -->\n    <text x=\"20\" y=\"255\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">Ch Z (Index Pulse = 1 per rev):</text>\n    <path d=\"M 60 280 L 135 280 L 135 265 L 145 265 L 145 280 L 240 280\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n\n    <!-- Summary Box -->\n    <rect x=\"20\" y=\"300\" width=\"260\" height=\"45\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.2\" rx=\"6\"/>\n    <text x=\"150\" y=\"325\" fill=\"#6ee7b7\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">تحديد الاتجاه عبر مقارنة تقدم الطور بين A و B</text>\n  </g>\n\n</svg>",
    "note": "يتيح نظام المسارين المتعامدين (Quadrature 90°) حساب السرعة وتحديد اتجاه الدوران بدقة متناهية.",
    "unit": "SET_B"
  },
  {
    "id": "DRAW_Q17",
    "title": "Load Cell for Liquid Level (خلية الوزن بمقاييس الانفعال لقياس مستوى السائل)",
    "question": "Draw a strain gauge load cell (50 kg capacity) as a secondary sensor for measuring the level of liquid in a cylindrical vessel. Show how the load cell supports the vessel and how its output relates to liquid level.",
    "components": [
      "Cylindrical storage vessel (Cross-sectional area A)",
      "Liquid column (Height h, Density ρ)",
      "Empty vessel tare weight (W_empty)",
      "50 kg strain gauge beam load cell",
      "Rigid foundation support base",
      "Weight/level signal indicator"
    ],
    "formula": "W = W_empty + (ρ · g · A) · h   ==>   h = (W - W_empty) / (ρ · g · A)",
    "diagramType": "Gravimetric Level Instrumentation Diagram (مخطط قياس المستوى الوزني)",
    "examSteps": [
      "1. ارسم وعاءً أسطوانياً (Cylindrical Vessel) بمساحة مقطع A محتوياً على سائل بارتفاع h وكثافة ρ.",
      "2. ارسم خلية وزن بمقياس انفعال سعة 50 كجم (Load Cell) مثبتة مباشرة أسفل قاع الوعاء.",
      "3. ارسم القاعدة الصلبة (Rigid Base Foundation) التي تستند عليها الخلية.",
      "4. أخرج سلك الإشارة الكهربائية من خلية الوزن نحو مؤشر الوزن والارتفاع (Level Indicator).",
      "5. اكتب معادلة الوزن الكلي: W = W_empty + (ρ * g * A) * h.",
      "6. استنتج علاقة ارتفاع السائل: h = (W - W_empty) / (ρ * g * A)."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Strain Gauge Load Cell as Secondary Liquid Level Sensor\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(60, 25)\">\n    <text x=\"340\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">Strain Gauge Load Cell as Secondary Liquid Level Sensor</text>\n\n    <!-- Cylindrical Vessel -->\n    <rect x=\"210\" y=\"60\" width=\"260\" height=\"200\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2.5\" rx=\"8\"/>\n    <text x=\"340\" y=\"85\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Cylindrical Vessel (Area A)</text>\n\n    <!-- Liquid Column Inside -->\n    <rect x=\"210\" y=\"110\" width=\"260\" height=\"150\" fill=\"rgba(6,182,212,0.25)\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n    <text x=\"340\" y=\"190\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Liquid Volume (Height h, Density ρ)</text>\n\n    <!-- Height Dimension h -->\n    <line x1=\"180\" y1=\"110\" x2=\"180\" y2=\"260\" stroke=\"#10b981\" stroke-width=\"2.5\" marker-start=\"url(#arrG)\" marker-end=\"url(#arrG)\"/>\n    <text x=\"165\" y=\"190\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"end\">h</text>\n\n    <!-- Weight Force Arrow -->\n    <line x1=\"340\" y1=\"210\" x2=\"340\" y2=\"260\" stroke=\"#f43f5e\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/>\n    <text x=\"355\" y=\"240\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">Weight W</text>\n\n    <!-- Load Cell (50 kg Capacity) Under Vessel Base -->\n    <rect x=\"260\" y=\"265\" width=\"160\" height=\"40\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2.5\" rx=\"5\" filter=\"url(#glow)\"/>\n    <text x=\"340\" y=\"290\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Strain Gauge Load Cell (50 kg)</text>\n\n    <!-- Rigid Foundation / Ground -->\n    <rect x=\"160\" y=\"310\" width=\"360\" height=\"20\" fill=\"#0f172a\" stroke=\"#64748b\" stroke-width=\"2\"/>\n    <line x1=\"160\" y1=\"330\" x2=\"520\" y2=\"330\" stroke=\"#64748b\" stroke-width=\"3\"/>\n    <text x=\"340\" y=\"325\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">Rigid Base Foundation (أرضية صلبة)</text>\n\n    <!-- Electrical Output Leads to Indicator -->\n    <line x1=\"420\" y1=\"285\" x2=\"550\" y2=\"285\" stroke=\"#10b981\" stroke-width=\"3\"/>\n    <circle cx=\"550\" cy=\"285\" r=\"4\" fill=\"#10b981\"/>\n    \n    <rect x=\"550\" y=\"255\" width=\"130\" height=\"60\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"615\" y=\"280\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Weight / Level</text>\n    <text x=\"615\" y=\"300\" fill=\"#c084fc\" font-family=\"JetBrains Mono\" font-size=\"11\" text-anchor=\"middle\">Indicator (h)</text>\n\n    <!-- Formula Box -->\n    <rect x=\"80\" y=\"355\" width=\"540\" height=\"45\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"350\" y=\"378\" fill=\"#6ee7b7\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">Total Weight W = W_empty + (ρ · g · A) · h   ==>   h = (W - W_empty) / (ρ · g · A)</text>\n  </g>\n\n</svg>",
    "note": "طريقة قياس غير تلامسية (Non-invasive)؛ حيث يتم حساب ارتفاع السائل من قياس الوزن الكلي للوعاء وقسمته على كثافة السائل ومساحة القاعدة.",
    "unit": "SET_F"
  },
  {
    "id": "DRAW_Q18",
    "title": "LVDT Signal Conditioning Circuit (دائرة تكييف إشارة محول LVDT لتحويل AC إلى DC)",
    "question": "Draw the block diagram of the LVDT signal conditioning circuit that converts the raw AC differential output to a DC voltage unique to each displacement. Include: LVDT coils, phase-sensitive demodulator, and low-pass filter.",
    "components": [
      "AC carrier oscillator (1-10 kHz)",
      "LVDT Transducer (Primary & Opposing Secondaries)",
      "AC Differential Amplifier",
      "Phase-Sensitive Demodulator (Synchronous Rectifier)",
      "Reference phase synchronization line",
      "Low-Pass Filter (LPF)",
      "Signed DC Output Voltage (±Vout)"
    ],
    "formula": "Differential AC (Vs1 - Vs2) ──> Demodulation (Phase vs Ref) ──> LPF ──> Bipolar Linear DC Voltage (±V_out)",
    "diagramType": "Signal Conditioning Block Diagram & Waveform Progression",
    "examSteps": [
      "1. ارسم صندوق مذبذب الحامل المتناوب (AC Carrier Oscillator) يغذي ملف الـ Primary في LVDT.",
      "2. ارسم صندوق ملفات LVDT مع سهم الإزاحة الميكانيكية ±x.",
      "3. ارسم المكبر التفاضلي المتناوب (AC Differential Amp) مستقبلاً فرق الجهد بين الملفين الثانويين.",
      "4. ارسم صندوق كاشف فرق الطور (Phase-Sensitive Demodulator) مع خط مرجع الطور القادم من المذبذب.",
      "5. ارسم مرشح الترددات المنخفضة (Low-Pass Filter LPF) لتنعيم الخرج وإزالة التموجات.",
      "6. وضح شكل الموجة في المراحل الثلاث: (AC متناوبة ➔ نبضات مقومة بالطور ➔ خط مستقيم DC موجب أو سالب)."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"LVDT Signal Conditioning Circuit Block Diagram\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(30, 25)\">\n    <text x=\"370\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">LVDT Signal Conditioning Circuit Block Diagram (AC to Bipolar DC)</text>\n\n    <!-- 1. AC Oscillator -->\n    <rect x=\"40\" y=\"70\" width=\"110\" height=\"70\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"95\" y=\"100\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">AC Carrier</text>\n    <text x=\"95\" y=\"118\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">Oscillator (Vin)</text>\n    <text x=\"95\" y=\"132\" fill=\"#c084fc\" font-family=\"JetBrains Mono\" font-size=\"9\" text-anchor=\"middle\">1-10 kHz</text>\n\n    <!-- Wire Oscillator -> LVDT Primary -->\n    <line x1=\"150\" y1=\"105\" x2=\"200\" y2=\"105\" stroke=\"#8b5cf6\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/>\n\n    <!-- Reference Phase Line from Oscillator -> Demodulator -->\n    <path d=\"M 95 140 L 95 240 L 415 240 L 415 175\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" stroke-dasharray=\"4,4\" marker-end=\"url(#arrA)\"/>\n    <text x=\"250\" y=\"230\" fill=\"#f59e0b\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Reference Phase Sync Line (إشارة مرجع الطور)</text>\n\n    <!-- 2. LVDT Coils Sensor -->\n    <rect x=\"200\" y=\"70\" width=\"100\" height=\"70\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"250\" y=\"100\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">LVDT Coils</text>\n    <text x=\"250\" y=\"118\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">(P, S1, S2)</text>\n    <line x1=\"250\" y1=\"140\" x2=\"250\" y2=\"160\" stroke=\"#f59e0b\" stroke-width=\"2\" marker-start=\"url(#arrA)\" marker-end=\"url(#arrA)\"/>\n    <text x=\"250\" y=\"175\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">±x</text>\n\n    <!-- Wire LVDT -> Diff Amp -->\n    <line x1=\"300\" y1=\"105\" x2=\"330\" y2=\"105\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/>\n\n    <!-- 3. AC Differential Amplifier -->\n    <polygon points=\"330,75 330,135 385,105\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\"/>\n    <text x=\"345\" y=\"102\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"9\" font-weight=\"bold\">AC Diff</text>\n    <text x=\"345\" y=\"115\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"9\" font-weight=\"bold\">Amp</text>\n\n    <!-- Wire Diff Amp -> Demodulator -->\n    <line x1=\"385\" y1=\"105\" x2=\"415\" y2=\"105\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/>\n\n    <!-- 4. Phase-Sensitive Demodulator -->\n    <rect x=\"415\" y=\"70\" width=\"130\" height=\"70\" fill=\"url(#gradEmerald)\" stroke=\"#10b981\" stroke-width=\"2.5\" rx=\"6\"/>\n    <text x=\"480\" y=\"98\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Phase-Sensitive</text>\n    <text x=\"480\" y=\"116\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Demodulator</text>\n    <text x=\"480\" y=\"132\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">(كاشف فرق الطور)</text>\n\n    <!-- Wire Demodulator -> Low Pass Filter -->\n    <line x1=\"545\" y1=\"105\" x2=\"575\" y2=\"105\" stroke=\"#10b981\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n\n    <!-- 5. Low-Pass Filter (LPF) -->\n    <rect x=\"575\" y=\"70\" width=\"90\" height=\"70\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"620\" y=\"102\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Low-Pass</text>\n    <text x=\"620\" y=\"120\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">Filter (LPF)</text>\n\n    <!-- Final Signed DC Output -->\n    <line x1=\"665\" y1=\"105\" x2=\"715\" y2=\"105\" stroke=\"#10b981\" stroke-width=\"3.5\" marker-end=\"url(#arrG)\" filter=\"url(#glow)\"/>\n    <text x=\"720\" y=\"100\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">Signed DC</text>\n    <text x=\"720\" y=\"118\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">Vout (±V)</text>\n\n    <!-- Waveforms Progress Strip (Bottom) -->\n    <g transform=\"translate(40, 260)\">\n      <rect x=\"0\" y=\"0\" width=\"660\" height=\"90\" fill=\"rgba(255,255,255,0.02)\" stroke=\"#64748b\" stroke-width=\"1.5\" rx=\"6\"/>\n      <text x=\"20\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\">مراحل تحويل الإشارة (Signal Transformation Stages):</text>\n\n      <!-- Wave 1: Diff AC -->\n      <g transform=\"translate(60, 50)\">\n        <path d=\"M 0 0 Q 15 -20 30 0 T 60 0 T 90 0\" fill=\"none\" stroke=\"#8b5cf6\" stroke-width=\"2\"/>\n        <text x=\"45\" y=\"25\" fill=\"#c084fc\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">1. إشارة AC متباينة</text>\n      </g>\n      <text x=\"190\" y=\"60\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"14\">➔</text>\n\n      <!-- Wave 2: Demodulated Rectified -->\n      <g transform=\"translate(240, 50)\">\n        <path d=\"M 0 0 Q 15 -20 30 0 Q 45 -20 60 0 Q 75 -20 90 0\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n        <text x=\"45\" y=\"25\" fill=\"#f59e0b\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">2. تقويم تزامني موجه</text>\n      </g>\n      <text x=\"370\" y=\"60\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"14\">➔</text>\n\n      <!-- Wave 3: Pure Smooth DC -->\n      <g transform=\"translate(420, 50)\">\n        <line x1=\"0\" y1=\"-12\" x2=\"90\" y2=\"-12\" stroke=\"#10b981\" stroke-width=\"3\" filter=\"url(#glow)\"/>\n        <text x=\"45\" y=\"25\" fill=\"#10b981\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">3. جهد DC نقي مستمر (±V)</text>\n      </g>\n    </g>\n\n    <!-- Formula / Summary Box -->\n    <rect x=\"80\" y=\"365\" width=\"580\" height=\"40\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.2\" rx=\"6\"/>\n    <text x=\"370\" y=\"390\" fill=\"#6ee7b7\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">الـ Phase Demodulator يحدد إشارة القطبية (موجب/سالب)، والـ LPF ينعم الإشارة ويزيل تردد الحامل</text>\n  </g>\n\n</svg>",
    "note": "بدون كاشف الطور لا يمكن تمييز الحركة يميناً أو يساراً لأن سعة AC متماثلة على الجانبين، لذا يحدد كاشف الطور الإشارة الموجبة والسالبة.",
    "unit": "SET_C"
  },
  {
    "id": "DRAW_Q19",
    "title": "A3144 Hall Sensor Module with Arduino (توصيل موديول حساس هول A3144 مع أردوينو)",
    "question": "Draw the circuit diagram for connecting a Hall effect sensor module (A3144 type with AO, DO, GND, VCC pins) to an Arduino UNO, showing both the digital and analogue output connections.",
    "components": [
      "A3144 Hall sensor module board",
      "VCC Pin (+5V supply)",
      "GND Pin (Ground)",
      "DO Pin (Digital Output ➔ Arduino Pin 2 / Interrupt INT0)",
      "AO Pin (Analog Output ➔ Arduino Pin A0)",
      "On-board potentiometer & LM393 comparator",
      "Arduino UNO Board"
    ],
    "formula": "DO = Digital Trigger (LOW upon Magnetic Detect)  ;  AO = Analog Voltage ∝ B",
    "diagramType": "Module Circuit Interfacing Diagram (مخطط ربط الموديول مع المتحكم)",
    "examSteps": [
      "1. ارسم موديول حساس A3144 على اليسار موضحاً شريحة هول والمقارن ومقاومة ضبط الحساسية.",
      "2. حدد أطراف الموديول الأربعة: VCC و GND و DO و AO.",
      "3. ارسم لوحة الأردوينو على اليمين وحدد الأطراف: 5V و GND و Pin 2 و A0.",
      "4. وصل خط التغذية VCC بـ 5V وخط الأرضي GND بـ GND.",
      "5. وصل طرف الخرج الرقمي DO بالطرف Pin 2 (Hardware Interrupt INT0).",
      "6. وصل طرف الخرج التناظري AO بالطرف التناظري Pin A0."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"A3144 Hall Effect Sensor Module Interfaced with Arduino UNO\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(30, 25)\">\n    <text x=\"370\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">A3144 Hall Effect Sensor Module Interfaced with Arduino UNO</text>\n\n    <!-- A3144 Module Board (Left) -->\n    <g transform=\"translate(60, 60)\">\n      <rect x=\"0\" y=\"0\" width=\"220\" height=\"240\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2.5\" rx=\"10\"/>\n      <text x=\"110\" y=\"30\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">A3144 Hall Module</text>\n\n      <!-- On-board A3144 Sensor IC -->\n      <rect x=\"25\" y=\"55\" width=\"45\" height=\"40\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"1.5\" rx=\"3\"/>\n      <text x=\"47\" y=\"80\" fill=\"#04130e\" font-family=\"JetBrains Mono\" font-size=\"9\" font-weight=\"bold\" text-anchor=\"middle\">A3144</text>\n\n      <!-- Comparator IC (LM393) & Trimpot -->\n      <rect x=\"90\" y=\"55\" width=\"55\" height=\"35\" fill=\"#080f1d\" stroke=\"#38bdf8\" stroke-width=\"1\" rx=\"3\"/>\n      <text x=\"117\" y=\"77\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"9\" text-anchor=\"middle\">LM393</text>\n      <circle cx=\"175\" cy=\"72\" r=\"14\" fill=\"#06b6d4\" stroke=\"#fff\" stroke-width=\"1.5\"/>\n      <text x=\"175\" y=\"76\" fill=\"#04130e\" font-family=\"JetBrains Mono\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">POT</text>\n      <text x=\"175\" y=\"98\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"8\" text-anchor=\"middle\">Sensitivity</text>\n\n      <!-- Output Pin Header (Right edge of module) -->\n      <!-- VCC -->\n      <circle cx=\"220\" cy=\"115\" r=\"4.5\" fill=\"#f43f5e\"/>\n      <text x=\"210\" y=\"120\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\">VCC</text>\n\n      <!-- GND -->\n      <circle cx=\"220\" cy=\"145\" r=\"4.5\" fill=\"#64748b\"/>\n      <text x=\"210\" y=\"150\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\">GND</text>\n\n      <!-- DO -->\n      <circle cx=\"220\" cy=\"175\" r=\"4.5\" fill=\"#10b981\"/>\n      <text x=\"210\" y=\"180\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\">DO (Digital)</text>\n\n      <!-- AO -->\n      <circle cx=\"220\" cy=\"205\" r=\"4.5\" fill=\"#06b6d4\"/>\n      <text x=\"210\" y=\"210\" fill=\"#06b6d4\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"end\">AO (Analog)</text>\n    </g>\n\n    <!-- Connecting Wires -->\n    <path d=\"M 280 175 L 470 175\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n    <path d=\"M 280 205 L 470 205\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n    <path d=\"M 280 235 L 470 235\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    <path d=\"M 280 265 L 470 265\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"2.5\"/>\n\n    <!-- Arduino UNO (Right) -->\n    <g transform=\"translate(470, 50)\">\n      <rect x=\"0\" y=\"0\" width=\"220\" height=\"260\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2.5\" rx=\"10\"/>\n      <text x=\"110\" y=\"30\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"15\" font-weight=\"bold\" text-anchor=\"middle\">Arduino UNO</text>\n\n      <!-- Pin Nodes on Left of Arduino -->\n      <!-- 5V -->\n      <circle cx=\"0\" cy=\"125\" r=\"4.5\" fill=\"#f43f5e\"/>\n      <text x=\"12\" y=\"130\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">5V (Power)</text>\n\n      <!-- GND -->\n      <circle cx=\"0\" cy=\"155\" r=\"4.5\" fill=\"#64748b\"/>\n      <text x=\"12\" y=\"160\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">GND</text>\n\n      <!-- Pin 2 (Interrupt INT0) -->\n      <circle cx=\"0\" cy=\"185\" r=\"4.5\" fill=\"#10b981\"/>\n      <text x=\"12\" y=\"190\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">Pin 2 (INT0 / DO)</text>\n\n      <!-- Pin A0 -->\n      <circle cx=\"0\" cy=\"215\" r=\"4.5\" fill=\"#06b6d4\"/>\n      <text x=\"12\" y=\"220\" fill=\"#06b6d4\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\">Pin A0 (Analog In)</text>\n    </g>\n\n    <!-- Info Box -->\n    <rect x=\"80\" y=\"330\" width=\"580\" height=\"50\" fill=\"rgba(6,182,212,0.1)\" stroke=\"#06b6d4\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"370\" y=\"352\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">DO (Digital Out): نبضة قاطعة عند وجود مغناطيس | AO (Analog Out): قراءة شدة المجال B</text>\n    <text x=\"370\" y=\"370\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">يوصل طرف DO بالمقاطعة الخارجية Pin 2 لعد الدورات / قياس السرعة بدقة فائقة</text>\n  </g>\n\n</svg>",
    "note": "يوفر موديول A3144 خرجين: رقمي DO لتطبيقات العد والمقاطعة (Interrupts)، وتناظري AO لقياس شدة المجال.",
    "unit": "SET_D"
  },
  {
    "id": "DRAW_Q20",
    "title": "Capacitive Liquid Level Sensor (حساس مستوى السائل السعوي بالألواح المتوازية)",
    "question": "Draw a capacitive liquid level sensor arrangement showing two vertical parallel plate electrodes inside a vessel. Explain how rising liquid level between the plates changes the capacitance.",
    "components": [
      "Process vessel/tank",
      "Two vertical parallel metal plate electrodes",
      "Plate width (w) & spacing distance (d)",
      "Total plate height (H)",
      "Liquid height (h) with dielectric ε_liquid",
      "Air space (H - h) with dielectric ε_air ≈ 1",
      "Capacitance measuring bridge circuit"
    ],
    "formula": "C = (ε_0 · w / d) · [ ε_air · (H - h) + ε_liquid · h ]  ==>  ΔC ∝ h",
    "diagramType": "Electrostatic Level Sensor Schematic (مخطط الحساس السعوي للمستوى)",
    "examSteps": [
      "1. ارسم خزان السائل وبه سائل بارتفاع h ومساحة هواء بالأعلى (H - h).",
      "2. ارسم لوحين معدنيين متوازيين (Parallel Plates) رأسياً بعرض w ومسافة فاصلة d وطول H.",
      "3. وضح أن ثابت العزل للسائل ε_liquid أكبر بكثير من ثابت عزل الهواء ε_air ≈ 1.",
      "4. أخرج سلكي التوصيل من اللوحين إلى دائرة قنطرة قياس السعة (Capacitance Bridge).",
      "5. اكتب معادلة السعة الكلية: C = (ε0 * w / d) * [ε_air*(H-h) + ε_liquid*h].",
      "6. اشرح أنه بارتفاع السائل h تزداد السعة الكلية C خطياً مع الارتفاع."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Capacitive Liquid Level Sensor Parallel Plate Electrodes\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(60, 25)\">\n    <text x=\"340\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">Capacitive Liquid Level Sensor (Parallel Plate Electrodes)</text>\n\n    <!-- Vessel Outline -->\n    <rect x=\"140\" y=\"60\" width=\"400\" height=\"260\" fill=\"rgba(14,23,38,0.7)\" stroke=\"#64748b\" stroke-width=\"2.5\" rx=\"8\"/>\n    <text x=\"340\" y=\"85\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"12\" text-anchor=\"middle\">Process Vessel / Tank</text>\n\n    <!-- Liquid Column (Height h) -->\n    <rect x=\"140\" y=\"170\" width=\"400\" height=\"150\" fill=\"rgba(6,182,212,0.22)\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n    <text x=\"210\" y=\"245\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"13\" font-weight=\"bold\">Liquid (ε_liquid &gt;&gt; 1)</text>\n\n    <!-- Air Space (H - h) -->\n    <text x=\"210\" y=\"130\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"12\">Air / Vapor Space (ε_air ≈ 1)</text>\n\n    <!-- Two Vertical Parallel Plate Electrodes -->\n    <rect x=\"310\" y=\"80\" width=\"18\" height=\"220\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"3\" filter=\"url(#glow)\"/>\n    <rect x=\"352\" y=\"80\" width=\"18\" height=\"220\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"3\" filter=\"url(#glow)\"/>\n    <text x=\"340\" y=\"70\" fill=\"#f59e0b\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Parallel Metal Plates (اللوحين المتوازيين)</text>\n\n    <!-- Plate Spacing d -->\n    <line x1=\"328\" y1=\"95\" x2=\"352\" y2=\"95\" stroke=\"#fff\" stroke-width=\"1.5\" marker-start=\"url(#arr)\" marker-end=\"url(#arr)\"/>\n    <text x=\"340\" y=\"115\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">d</text>\n\n    <!-- Plate Width w note -->\n    <text x=\"380\" y=\"95\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"11\">Width w</text>\n\n    <!-- Height Dimensions: Total H and Liquid h -->\n    <!-- Total H -->\n    <line x1=\"110\" y1=\"80\" x2=\"110\" y2=\"300\" stroke=\"#cbd5e1\" stroke-width=\"2\" marker-start=\"url(#arr)\" marker-end=\"url(#arr)\"/>\n    <text x=\"95\" y=\"190\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"end\">H</text>\n\n    <!-- Liquid h -->\n    <line x1=\"280\" y1=\"170\" x2=\"280\" y2=\"300\" stroke=\"#10b981\" stroke-width=\"2.5\" marker-start=\"url(#arrG)\" marker-end=\"url(#arrG)\"/>\n    <text x=\"270\" y=\"240\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"end\">h</text>\n\n    <!-- Electrical Lead Wires to Capacitance Bridge -->\n    <path d=\"M 319 80 L 319 45 L 460 45 L 460 120 L 570 120\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    <path d=\"M 361 80 L 361 45 L 480 45 L 480 150 L 570 150\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    <circle cx=\"570\" cy=\"120\" r=\"4\" fill=\"#10b981\"/>\n    <circle cx=\"570\" cy=\"150\" r=\"4\" fill=\"#10b981\"/>\n\n    <!-- Capacitance Bridge Box -->\n    <rect x=\"570\" y=\"95\" width=\"120\" height=\"80\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"630\" y=\"130\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Capacitance</text>\n    <text x=\"630\" y=\"150\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"11\" text-anchor=\"middle\">Bridge / ADC</text>\n\n    <!-- Formula Box -->\n    <rect x=\"60\" y=\"340\" width=\"560\" height=\"50\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"340\" y=\"363\" fill=\"#6ee7b7\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">C = (ε0 · w / d) · [ ε_air · (H - h) + ε_liquid · h ]  ==>  ΔC ∝ h</text>\n    <text x=\"340\" y=\"380\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">بارتفاع السائل h يحل وسط العزل العالي محل الهواء، فتزداد السعة الكلية C خطياً</text>\n  </g>\n\n</svg>",
    "note": "يعتمد الحساس على استبدال الهواء بالسائل كوسط عازل بين اللوحين، مما يزيد سعة المكثف طردياً مع عمق السائل.",
    "unit": "SET_F"
  },
  {
    "id": "DRAW_Q21",
    "title": "Active Suspension Closed-Loop System (نظام التعليق النشط المغلق في الميكاترونكس)",
    "question": "Draw the block diagram of a complete closed-loop mechatronics control system for automobile active suspension. Label the four key elements: sensor (road condition sensor), controller (ECU), actuator (hydraulic/pneumatic strut), and mechanical system (suspension). Show the feedback path.",
    "components": [
      "Reference setpoint (Desired Ride Height r(t))",
      "Summing junction (+ / -)",
      "Controller (ECU / PID algorithm)",
      "Actuator (Hydraulic/Pneumatic strut u(t))",
      "Plant / Mechanical system (Vehicle suspension & chassis)",
      "Road condition sensors (Accelerometers & Height sensors)",
      "Negative feedback loop path"
    ],
    "formula": "Error e(t) = r(t) - y_m(t)   |   Control Action u(t) = PID(e(t))",
    "diagramType": "Closed-Loop Control Block Diagram (مخطط التحكم ذو التغذية المرتدة)",
    "examSteps": [
      "1. ارسم سهم دخل القيمة المطلوبة Setpoint r(t) يدخل نقطة التجميع (Summing Junction).",
      "2. ارسم صندوق وحدة التحكم الإلكترونية (ECU Controller / PID) مستقبلاً إشارة الخطأ e(t).",
      "3. ارسم صندوق المشغل الهيدروليكي (Hydraulic Actuator Strut) مستقبلاً أمر التحكم u(t).",
      "4. ارسم صندوق المنظومة الميكانيكية (Vehicle Suspension & Chassis) وسهم اضطراب الطريق (Road Bumps).",
      "5. أخرج سهم الخرج الفعلي لارتفاع واستقرار السيارة y(t).",
      "6. اسحب خط التغذية المرتدة السالبة من الخرج عبر صندوق الحساسات (Sensors) ليعود إلى نقطة التجميع بإشارة سالبة (-)."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Closed-Loop Active Suspension Control System\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(30, 25)\">\n    <text x=\"370\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">Closed-Loop Active Suspension Mechatronics Control System</text>\n\n    <!-- Reference Setpoint In -->\n    <line x1=\"20\" y1=\"120\" x2=\"95\" y2=\"120\" stroke=\"#10b981\" stroke-width=\"3\" marker-end=\"url(#arrG)\"/>\n    <text x=\"55\" y=\"105\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Setpoint r(t)</text>\n    <text x=\"55\" y=\"145\" fill=\"#94a3b8\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">(Desired Height)</text>\n\n    <!-- Summing Junction (+/-) -->\n    <circle cx=\"110\" cy=\"120\" r=\"16\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\"/>\n    <text x=\"110\" y=\"125\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">+</text>\n    <text x=\"96\" y=\"145\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\">-</text>\n\n    <!-- Error Wire -->\n    <line x1=\"126\" y1=\"120\" x2=\"165\" y2=\"120\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/>\n    <text x=\"145\" y=\"110\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">e(t)</text>\n\n    <!-- 1. Controller (ECU / PID) -->\n    <rect x=\"165\" y=\"80\" width=\"115\" height=\"80\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"222\" y=\"112\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">ECU Controller</text>\n    <text x=\"222\" y=\"132\" fill=\"#c084fc\" font-family=\"JetBrains Mono\" font-size=\"11\" text-anchor=\"middle\">(PID Algorithm)</text>\n\n    <!-- Wire Controller -> Actuator -->\n    <line x1=\"280\" y1=\"120\" x2=\"320\" y2=\"120\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/>\n    <text x=\"300\" y=\"110\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">u(t)</text>\n\n    <!-- 2. Actuator (Hydraulic / Pneumatic Strut) -->\n    <rect x=\"320\" y=\"80\" width=\"125\" height=\"80\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"382\" y=\"112\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Actuator</text>\n    <text x=\"382\" y=\"132\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">(Hydraulic Strut)</text>\n\n    <!-- Wire Actuator -> Plant -->\n    <line x1=\"445\" y1=\"120\" x2=\"485\" y2=\"120\" stroke=\"#38bdf8\" stroke-width=\"2.5\" marker-end=\"url(#arr)\"/>\n\n    <!-- 3. Plant (Vehicle Suspension & Chassis) -->\n    <rect x=\"485\" y=\"80\" width=\"135\" height=\"80\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"552\" y=\"112\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Vehicle Chassis</text>\n    <text x=\"552\" y=\"132\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">&amp; Suspension</text>\n\n    <!-- Road Disturbance In -->\n    <line x1=\"552\" y1=\"20\" x2=\"552\" y2=\"80\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arrR)\"/>\n    <text x=\"560\" y=\"45\" fill=\"#f43f5e\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\">Road Bumps d(t)</text>\n\n    <!-- Output Controlled Ride -->\n    <line x1=\"620\" y1=\"120\" x2=\"710\" y2=\"120\" stroke=\"#10b981\" stroke-width=\"3.5\" marker-end=\"url(#arrG)\" filter=\"url(#glow)\"/>\n    <text x=\"655\" y=\"105\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\">Ride Height y(t)</text>\n\n    <!-- Negative Feedback Branch: Sensors -->\n    <path d=\"M 660 120 L 660 230 L 460 230\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    \n    <!-- 4. Sensors Block -->\n    <rect x=\"300\" y=\"195\" width=\"160\" height=\"70\" fill=\"url(#gradEmerald)\" stroke=\"#10b981\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"380\" y=\"225\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Feedback Sensors</text>\n    <text x=\"380\" y=\"245\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">(Height / Accelerometer)</text>\n\n    <!-- Feedback to Summing -->\n    <path d=\"M 300 230 L 110 230 L 110 136\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\" marker-end=\"url(#arrG)\"/>\n    <text x=\"200\" y=\"220\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\">Measured Height ym(t)</text>\n\n    <!-- Summary Box -->\n    <rect x=\"80\" y=\"320\" width=\"580\" height=\"50\" fill=\"rgba(139,92,246,0.12)\" stroke=\"#8b5cf6\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"370\" y=\"342\" fill=\"#c084fc\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">العناصر الأربعة: الحساس (Sensor) ➔ المتحكم (ECU) ➔ المشغل (Actuator) ➔ المنظومة الميكانيكية</text>\n    <text x=\"370\" y=\"360\" fill=\"#cbd5e1\" font-family=\"system-ui\" font-size=\"11\" text-anchor=\"middle\">تقارن وحدة ECU الارتفاع الفعلي بالمطلوب وتصدر أوامر فورية للمشغل لامتصاص صدمات الطريق</text>\n  </g>\n\n</svg>",
    "note": "يدمج النظام النشط العناصر الأربعة الأساسية في الميكاترونكس لتوفير ثبات وأمان عالي للمركبة ضد تموجات الطريق.",
    "unit": "SET_H"
  },
  {
    "id": "DRAW_Q22",
    "title": "Microcontroller Internal Architecture (المعمارية الداخلية للمتحكم الدقيق)",
    "question": "Draw the internal architecture block diagram of a microcontroller, showing its three main integrated components: Microprocessor (MPU), Memory (RAM/ROM), and I/O Ports. Add arrows to show data flow between components and label the external connections to sensors and actuators.",
    "components": [
      "Microcontroller single silicon chip boundary",
      "Microprocessor core (MPU with ALU, Registers, CU)",
      "Internal Memory (Flash ROM, SRAM, EEPROM)",
      "I/O Ports & Peripherals (Digital I/O, Timers, ADC, UART, SPI)",
      "Internal Data, Address & Control Buses",
      "External sensor inputs",
      "External actuator outputs"
    ],
    "formula": "Microcontroller (MCU) = MPU (CPU) + Memory (RAM/ROM) + I/O Peripherals (All on 1 Single IC)",
    "diagramType": "Computer Hardware Architecture Diagram (مخطط المعمارية الحاسوبية)",
    "examSteps": [
      "1. ارسم إطاراً خارجياً كبيراً يمثل الشريحة المتكاملة الواحدة للمتحكم (Single Silicon Chip).",
      "2. ارسم الصندوق الأول: وحدة المعالج الدقيق (CPU / MPU Core) محتوية على ALU وسجلات ومتحكم التوقيت.",
      "3. ارسم الصندوق الثاني: الذاكرة المدمجة (Internal Memory) مقسمة إلى Flash ROM و SRAM و EEPROM.",
      "4. ارسم الصندوق الثالث: منافذ الدخل والخرج وملحقاتها (I/O Ports, Timers, ADC, UART).",
      "5. ارسم ناقل النظام المشترك (System Bus) ممتداً أسفل الصناديق الثلاثة بأسهم متبادلة الاتجاهين.",
      "6. ارسم أسهم الدخل الخارجية من الحساسات (Sensors In) وأسهم الخرج نحو المشغلات (Actuators Out)."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Microcontroller Internal Architecture Block Diagram\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(30, 25)\">\n    <text x=\"370\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">Microcontroller Internal Architecture (Single-Chip Integration)</text>\n\n    <!-- Outer Silicon Chip Boundary -->\n    <rect x=\"80\" y=\"55\" width=\"580\" height=\"260\" fill=\"rgba(14,23,38,0.85)\" stroke=\"#06b6d4\" stroke-width=\"2.5\" rx=\"10\" filter=\"url(#glow)\"/>\n    <text x=\"370\" y=\"78\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">MICROCONTROLLER (MCU) SINGLE SILICON CHIP</text>\n\n    <!-- 1. Microprocessor (MPU) Core -->\n    <rect x=\"105\" y=\"100\" width=\"160\" height=\"110\" fill=\"url(#gradPurple)\" stroke=\"#8b5cf6\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"185\" y=\"125\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">CPU / MPU Core</text>\n    <rect x=\"115\" y=\"140\" width=\"65\" height=\"30\" fill=\"rgba(0,0,0,0.3)\" stroke=\"#c084fc\" stroke-width=\"1\" rx=\"3\"/>\n    <text x=\"147\" y=\"160\" fill=\"#c084fc\" font-family=\"JetBrains Mono\" font-size=\"10\" text-anchor=\"middle\">ALU</text>\n    <rect x=\"185\" y=\"140\" width=\"70\" height=\"30\" fill=\"rgba(0,0,0,0.3)\" stroke=\"#c084fc\" stroke-width=\"1\" rx=\"3\"/>\n    <text x=\"220\" y=\"160\" fill=\"#c084fc\" font-family=\"JetBrains Mono\" font-size=\"10\" text-anchor=\"middle\">Registers</text>\n    <text x=\"185\" y=\"195\" fill=\"#fff\" font-family=\"system-ui\" font-size=\"10\" text-anchor=\"middle\">Control Unit &amp; Clock</text>\n\n    <!-- 2. Internal Memory Unit -->\n    <rect x=\"295\" y=\"100\" width=\"160\" height=\"110\" fill=\"url(#gradAmber)\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"375\" y=\"125\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Internal Memory</text>\n    <rect x=\"305\" y=\"135\" width=\"140\" height=\"22\" fill=\"rgba(0,0,0,0.2)\" stroke=\"#f59e0b\" stroke-width=\"1\" rx=\"3\"/>\n    <text x=\"375\" y=\"150\" fill=\"#04130e\" font-family=\"JetBrains Mono\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Flash ROM (Program)</text>\n    <rect x=\"305\" y=\"160\" width=\"140\" height=\"22\" fill=\"rgba(0,0,0,0.2)\" stroke=\"#f59e0b\" stroke-width=\"1\" rx=\"3\"/>\n    <text x=\"375\" y=\"175\" fill=\"#04130e\" font-family=\"JetBrains Mono\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">SRAM (Variables / Data)</text>\n    <rect x=\"305\" y=\"185\" width=\"140\" height=\"20\" fill=\"rgba(0,0,0,0.2)\" stroke=\"#f59e0b\" stroke-width=\"1\" rx=\"3\"/>\n    <text x=\"375\" y=\"199\" fill=\"#04130e\" font-family=\"JetBrains Mono\" font-size=\"9\" text-anchor=\"middle\">EEPROM (Non-volatile)</text>\n\n    <!-- 3. I/O Ports & Integrated Peripherals -->\n    <rect x=\"485\" y=\"100\" width=\"155\" height=\"110\" fill=\"url(#gradEmerald)\" stroke=\"#10b981\" stroke-width=\"2\" rx=\"6\"/>\n    <text x=\"562\" y=\"125\" fill=\"#04130e\" font-family=\"system-ui\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">I/O &amp; Peripherals</text>\n    <text x=\"562\" y=\"150\" fill=\"#04130e\" font-family=\"JetBrains Mono\" font-size=\"10\" text-anchor=\"middle\">• Digital I/O Ports</text>\n    <text x=\"562\" y=\"168\" fill=\"#04130e\" font-family=\"JetBrains Mono\" font-size=\"10\" text-anchor=\"middle\">• Timers / Counters</text>\n    <text x=\"562\" y=\"186\" fill=\"#04130e\" font-family=\"JetBrains Mono\" font-size=\"10\" text-anchor=\"middle\">• 10-bit ADC</text>\n    <text x=\"562\" y=\"202\" fill=\"#04130e\" font-family=\"JetBrains Mono\" font-size=\"10\" text-anchor=\"middle\">• UART / SPI / I2C</text>\n\n    <!-- Internal System Bus (Bidirectional connecting all 3) -->\n    <rect x=\"105\" y=\"240\" width=\"535\" height=\"30\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"2\" rx=\"4\"/>\n    <text x=\"370\" y=\"260\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">INTERNAL SYSTEM BUS (Data, Address &amp; Control Buses)</text>\n\n    <!-- Bus Connecting Arrows -->\n    <line x1=\"185\" y1=\"210\" x2=\"185\" y2=\"240\" stroke=\"#06b6d4\" stroke-width=\"3\" marker-start=\"url(#arr)\" marker-end=\"url(#arr)\"/>\n    <line x1=\"375\" y1=\"210\" x2=\"375\" y2=\"240\" stroke=\"#06b6d4\" stroke-width=\"3\" marker-start=\"url(#arr)\" marker-end=\"url(#arr)\"/>\n    <line x1=\"562\" y1=\"210\" x2=\"562\" y2=\"240\" stroke=\"#06b6d4\" stroke-width=\"3\" marker-start=\"url(#arr)\" marker-end=\"url(#arr)\"/>\n\n    <!-- External Inputs / Outputs -->\n    <line x1=\"20\" y1=\"155\" x2=\"80\" y2=\"155\" stroke=\"#10b981\" stroke-width=\"3\" marker-end=\"url(#arrG)\"/>\n    <text x=\"50\" y=\"140\" fill=\"#10b981\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Sensors (In)</text>\n\n    <line x1=\"660\" y1=\"155\" x2=\"720\" y2=\"155\" stroke=\"#f43f5e\" stroke-width=\"3\" marker-end=\"url(#arrR)\"/>\n    <text x=\"690\" y=\"140\" fill=\"#f43f5e\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Actuators (Out)</text>\n\n    <!-- Summary Box -->\n    <rect x=\"80\" y=\"335\" width=\"580\" height=\"45\" fill=\"rgba(6,182,212,0.12)\" stroke=\"#06b6d4\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"370\" y=\"358\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Microcontroller = Microprocessor (MPU) + Memory (RAM/ROM) + I/O Ports on 1 Chip</text>\n  </g>\n\n</svg>",
    "note": "الفرق الجوهري بين المعالج والمتحكم هو دمج الذاكرة ومنافذ الدخل والخرج والمؤقتات داخل نفس شريحة السيليكون في المتحكم.",
    "unit": "SET_H"
  },
  {
    "id": "DRAW_Q23",
    "title": "Arduino UNO Architecture & Pinout (معمارية ومخطط أطراف بورد الأردوينو)",
    "question": "Draw a labelled diagram of the Arduino UNO board identifying: digital I/O pins, analogue input pins (A0–A5), power pins (5V, 3.3V, GND), USB connector, reset button, and the ATmega328P microcontroller chip.",
    "components": [
      "Arduino UNO PCB Board",
      "ATmega328P Microcontroller DIP-28 IC",
      "14 Digital I/O Pins (0–13 with 6 PWM pins ~3,5,6,9,10,11)",
      "6 Analog Input Pins (A0–A5)",
      "Power Header Pins (5V, 3.3V, GND, Vin, Reset)",
      "USB Type-B Interface Connector",
      "DC Barrel Power Jack (7–12V)",
      "Reset Button & 16 MHz Crystal Oscillator"
    ],
    "formula": "ATmega328P: 16 MHz, 32 KB Flash, 2 KB SRAM, 1 KB EEPROM, 6 PWM channels, 6 ADC channels (10-bit)",
    "diagramType": "Microcontroller Board Pinout & Layout Diagram (مخطط اللوحة وأطراف التوصيل)",
    "examSteps": [
      "1. ارسم شكل لوحة الأردوينو المستطيلة (PCB Board) مع تحديد زوايا التثبيت.",
      "2. ارسم منفذ الـ USB ومقبس التغذية الخارجية (DC Power Jack) على الجانب الأيسر.",
      "3. ارسم شريحة المتحكم الرئيسية ATmega328P في المنتصف مع مذبذب الكريستال (16 MHz Crystal).",
      "4. ارسم مسطرة الأطراف العلوية: المنافذ الرقمية (Digital I/O 0 to 13) وميز أطراف PWM (~3, 5, 6, 9, 10, 11).",
      "5. ارسم مسطرة الأطراف السفلية اليمنى: المداخل التناظرية (Analog Inputs A0 to A5).",
      "6. ارسم مسطرة الأطراف السفلية اليسرى: أطراف القدرة والتغذية (Power: 5V, 3.3V, GND, Vin, Reset)."
    ],
    "svgBlueprint": "<svg viewBox=\"0 0 800 440\" xmlns=\"http://www.w3.org/2000/svg\" class=\"exam-svg-blueprint\" aria-label=\"Arduino UNO Board Architecture and Pinout\">\n  <defs>\n    <pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\">\n      <path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.035)\" stroke-width=\"1\"/>\n    </pattern>\n    <linearGradient id=\"gradEmerald\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#10b981\" stop-opacity=\"0.3\"/>\n      <stop offset=\"100%\" stop-color=\"#059669\" stop-opacity=\"0.1\"/>\n    </linearGradient>\n    <linearGradient id=\"gradCyan\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#0891b2\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradPurple\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#8b5cf6\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#6d28d9\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradAmber\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <linearGradient id=\"gradRose\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#f43f5e\" stop-opacity=\"0.35\"/>\n      <stop offset=\"100%\" stop-color=\"#be123c\" stop-opacity=\"0.15\"/>\n    </linearGradient>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrG\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\"/>\n    </marker>\n    <marker id=\"arrA\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f59e0b\"/>\n    </marker>\n    <marker id=\"arrR\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\">\n      <feGaussianBlur stdDeviation=\"2.5\" result=\"blur\"/>\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\n    </filter>\n  </defs>\n  <rect width=\"800\" height=\"440\" fill=\"#080f1d\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"url(#grid)\" rx=\"10\"/>\n  <rect width=\"800\" height=\"440\" fill=\"none\" stroke=\"rgba(255,255,255,0.12)\" stroke-width=\"1.5\" rx=\"10\"/>\n  \n  <g transform=\"translate(30, 20)\">\n    <text x=\"370\" y=\"25\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">Arduino UNO Board Architecture &amp; Complete Pinout Diagram</text>\n\n    <!-- Arduino Board PCB Layout (Navy Teal PCB) -->\n    <g transform=\"translate(70, 45)\">\n      <rect x=\"0\" y=\"0\" width=\"600\" height=\"280\" fill=\"url(#gradCyan)\" stroke=\"#06b6d4\" stroke-width=\"3\" rx=\"14\" filter=\"url(#glow)\"/>\n      \n      <!-- Mounting Holes -->\n      <circle cx=\"20\" cy=\"20\" r=\"7\" fill=\"#080f1d\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n      <circle cx=\"580\" cy=\"20\" r=\"7\" fill=\"#080f1d\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n      <circle cx=\"580\" cy=\"260\" r=\"7\" fill=\"#080f1d\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n      <circle cx=\"20\" cy=\"260\" r=\"7\" fill=\"#080f1d\" stroke=\"#cbd5e1\" stroke-width=\"1.5\"/>\n\n      <!-- Board Title -->\n      <text x=\"290\" y=\"45\" fill=\"#fff\" font-family=\"JetBrains Mono\" font-size=\"20\" font-weight=\"bold\" text-anchor=\"middle\">ARDUINO  UNO</text>\n      <text x=\"290\" y=\"65\" fill=\"#38bdf8\" font-family=\"system-ui\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">ATmega328P Prototyping Platform</text>\n\n      <!-- USB Port (Left Top) -->\n      <rect x=\"-15\" y=\"30\" width=\"55\" height=\"45\" fill=\"#cbd5e1\" stroke=\"#fff\" stroke-width=\"1.5\" rx=\"3\"/>\n      <text x=\"12\" y=\"58\" fill=\"#080f1d\" font-family=\"JetBrains Mono\" font-size=\"10\" font-weight=\"bold\">USB</text>\n\n      <!-- DC Power Jack (Left Bottom) -->\n      <rect x=\"-15\" y=\"195\" width=\"60\" height=\"55\" fill=\"#1e293b\" stroke=\"#64748b\" stroke-width=\"2\" rx=\"4\"/>\n      <circle cx=\"15\" cy=\"222\" r=\"10\" fill=\"#080f1d\"/>\n      <text x=\"15\" y=\"242\" fill=\"#cbd5e1\" font-family=\"JetBrains Mono\" font-size=\"8\" text-anchor=\"middle\">7-12V DC</text>\n\n      <!-- Reset Push Button -->\n      <rect x=\"55\" y=\"20\" width=\"22\" height=\"22\" fill=\"#f43f5e\" stroke=\"#fff\" stroke-width=\"1\" rx=\"4\"/>\n      <text x=\"66\" y=\"52\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">Reset</text>\n\n      <!-- 16 MHz Crystal Oscillator -->\n      <rect x=\"130\" y=\"130\" width=\"35\" height=\"18\" fill=\"#cbd5e1\" stroke=\"#fff\" stroke-width=\"1\" rx=\"3\"/>\n      <text x=\"147\" y=\"143\" fill=\"#080f1d\" font-family=\"JetBrains Mono\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">16MHz</text>\n\n      <!-- ATmega328P DIP-28 Microcontroller IC (Center) -->\n      <rect x=\"200\" y=\"105\" width=\"220\" height=\"70\" fill=\"#080f1d\" stroke=\"#f59e0b\" stroke-width=\"2\" rx=\"4\"/>\n      <!-- DIP Pins -->\n      <path d=\"M 210 105 L 210 100 M 230 105 L 230 100 M 250 105 L 250 100 M 270 105 L 270 100 M 290 105 L 290 100 M 310 105 L 310 100 M 330 105 L 330 100 M 350 105 L 350 100 M 370 105 L 370 100 M 390 105 L 390 100 M 410 105 L 410 100\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n      <path d=\"M 210 175 L 210 180 M 230 175 L 230 180 M 250 175 L 250 180 M 270 175 L 270 180 M 290 175 L 290 180 M 310 175 L 310 180 M 330 175 L 330 180 M 350 175 L 350 180 M 370 175 L 370 180 M 390 175 L 390 180 M 410 175 L 410 180\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n      <text x=\"310\" y=\"137\" fill=\"#f59e0b\" font-family=\"JetBrains Mono\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">ATmega328P</text>\n      <text x=\"310\" y=\"157\" fill=\"#94a3b8\" font-family=\"JetBrains Mono\" font-size=\"10\" text-anchor=\"middle\">8-bit MCU / 32KB Flash</text>\n\n      <!-- TOP HEADER: Digital Pins (0 to 13 & GND, AREF) -->\n      <rect x=\"250\" y=\"-10\" width=\"310\" height=\"24\" fill=\"#080f1d\" stroke=\"#10b981\" stroke-width=\"2\" rx=\"3\"/>\n      <text x=\"405\" y=\"7\" fill=\"#10b981\" font-family=\"JetBrains Mono\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">DIGITAL I/O (Pins 0 to 13) | PWM (~3,5,6,9,10,11)</text>\n\n      <!-- BOTTOM RIGHT HEADER: Analog Inputs (A0 to A5) -->\n      <rect x=\"380\" y=\"266\" width=\"180\" height=\"24\" fill=\"#080f1d\" stroke=\"#38bdf8\" stroke-width=\"2\" rx=\"3\"/>\n      <text x=\"470\" y=\"282\" fill=\"#38bdf8\" font-family=\"JetBrains Mono\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">ANALOG IN (A0 .. A5)</text>\n\n      <!-- BOTTOM LEFT HEADER: Power (5V, 3.3V, GND, Vin, Reset) -->\n      <rect x=\"170\" y=\"266\" width=\"190\" height=\"24\" fill=\"#080f1d\" stroke=\"#f43f5e\" stroke-width=\"2\" rx=\"3\"/>\n      <text x=\"265\" y=\"282\" fill=\"#f43f5e\" font-family=\"JetBrains Mono\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">POWER (5V, 3.3V, GND, Vin)</text>\n    </g>\n\n    <!-- Info Box -->\n    <rect x=\"80\" y=\"340\" width=\"580\" height=\"45\" fill=\"rgba(16,185,129,0.12)\" stroke=\"#10b981\" stroke-width=\"1.5\" rx=\"6\"/>\n    <text x=\"370\" y=\"362\" fill=\"#6ee7b7\" font-family=\"JetBrains Mono\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">14 Digital I/O (6 PWM) | 6 Analog Inputs (10-bit ADC: A0-A5) | 16 MHz Clock | ATmega328P</text>\n  </g>\n\n</svg>",
    "note": "تعتمد اللوحة على ATmega328P وتتيح الربط المباشر مع الحساسات عبر مداخل Analog A0-A5 والمشغلات عبر منافذ PWM الرقمية.",
    "unit": "SET_H"
  }
];
