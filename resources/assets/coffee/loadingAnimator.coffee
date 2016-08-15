define ->


    ###

    module:     loadingAnimator
    usage:      handles behaviour of the loading overlay
    author:     R

    ###


    "use strict"

    divineLoadingMessage = [
        "Adding Hidden Agendas"
        "Adjusting Bell Curves"
        "Aesthesizing Industrial Areas"
        "Aligning Covariance Matrices"
        "Applying Feng Shui Shaders"
        "Applying Theatre Soda Layer"
        "Asserting Packed Exemplars"
        "Attempting to Lock Back-Buffer"
        "Binding Sapling Root System"
        "Breeding Fauna"
        "Building Data Trees"
        "Bureacritizing Bureaucracies"
        "Calculating Inverse Probability Matrices"
        "Calculating Llama Expectoration Trajectory"
        "Calibrating Blue Skies"
        "Charging Ozone Layer"
        "Coalescing Cloud Formations"
        "Cohorting Exemplars"
        "Collecting Meteor Particles"
        "Compounding Inert Tessellations"
        "Compressing Fish Files"
        "Computing Optimal Bin Packing"
        "Concatenating Sub-Contractors"
        "Containing Existential Buffer"
        "Debarking Ark Ramp"
        "Deciding What Message to Display Next"
        "Decomposing Singular Values"
        "Decrementing Tectonic Plates"
        "Deleting Ferry Routes"
        "Depositing Slush Funds"
        "Destabilizing Economic Indicators"
        "Determining Width of Blast Fronts"
        "Deunionizing Bulldozers"
        "Dicing Models"
        "Diluting Livestock Nutrition Variables"
        "Downloading Satellite Terrain Data"
        "Exposing Flash Variables to Streak System"
        "Extracting Resources"
        "Factoring Pay Scale"
        "Fetching Rhinoceros Breeding Timetable"
        "Fixing Election Outcome Matrix"
        "Flood-Filling Ground Water"
        "Flushing Pipe Network"
        "Gathering Particle Sources"
        "Generating Jobs"
        "Gesticulating Mimes"
        "Graphing Whale Migration"
        "Hiding Willio Webnet Mask"
        "Implementing Impeachment Routine"
        "Increasing Accuracy of RCI Simulators"
        "Increasing Magmafacation"
        "Initializing My Sim Tracking Mechanism"
        "Initializing Robotic Click-Path AI"
        "Inserting Sublimated Messages"
        "Integrating Curves"
        "Integrating Illumination Form Factors"
        "Integrating Population Graphs"
        "Iterating Cellular Automata"
        "Lecturing Errant Subsystems"
        "Mixing Genetic Pool"
        "Modeling Object Components"
        "Mopping Occupant Leaks"
        "Normalizing Power"
        "Obfuscating Quigley Matrix"
        "Partitioning City Grid Singularities"
        "Perturbing Matrices"
        "Pixalating Nude Patch"
        "Polishing Water Highlights"
        "Populating Lot Templates"
        "Preparing Sprites for Random Walks"
        "Prioritizing Landmarks"
        "Projecting Law Enforcement Pastry Intake"
        "Realigning Alternate Time Frames"
        "Reconfiguring User Mental Processes"
        "Relaxing Splines"
        "Removing Road Network Speed Bumps"
        "Removing Texture Gradients"
        "Removing Vehicle Avoidance Behavior"
        "Resolving GUID Conflict"
        "Reticulating Splines"
        "Retracting Phong Shader"
        "Retrieving from Back Store"
        "Reverse Engineering Image Consultant"
        "Routing Neural Network Infanstructure"
        "Scattering Rhino Food Sources"
        "Scrubbing Terrain"
        "Searching for Llamas"
        "Seeding Architecture Simulation Parameters"
        "Sequencing Particles"
        "Setting Advisor Moods"
        "Setting Inner Deity Indicators"
        "Setting Universal Physical Constants"
        "Speculating Stock Market Indices"
        "Splatting Transforms"
        "Stratifying Ground Layers"
        "Sub-Sampling Water Data"
        "Synthesizing Gravity"
        "Synthesizing Wavelets"
        "Time-Compressing Simulator Clock"
        "Unable to Reveal Current Activity"
        "Weathering Buildings"
        "Zeroing Crime Network"
    ]

    loadingScreenPOS = {
        sidebar         : 1
        appOutputs      : 2
    }

    start: (POS) ->
        loadingScreen = this.getLoadingScreen(POS)
        selectedLoadingMessage = divineLoadingMessage[Math.floor(Math.random()*(101))]
        loadingScreen.find("p").html(selectedLoadingMessage)
        loadingScreen.css("display", "flex")


    stop: (POS) ->
        this.getLoadingScreen(POS).css("display", "none")


    getLoadingScreen: (POS) ->
        if(POS == loadingScreenPOS.sidebar)
            return $(".sidebar" > ".loading")

        else if(POS == loadingScreenPOS.appOutputs)
            return $(".app-outputs" > ".loading")

        else
            return $(".loading")
