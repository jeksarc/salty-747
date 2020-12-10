class FMC_MAINT_Index {
    static ShowPage(fmc) {
		fmc.activeSystem = "SAT";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["MAINTENANCE INDEX"],
				["", ""],
				["<CROSS LOAD", "SENSORS>"],
				["", ""],
				["<AIRLINE POL", "DISCRETES>"],
				["", ""],
				["<IRS MONITOR", ""],
				["", ""],
				["", ""],
				["", ""],
				["", ""],
				["", "", "__FMCSEPARATOR"],
				["<INDEX", ""]
			]);
		}
		updateView();
		
		fmc.onLeftInput[5] = () => {
			FMC_Menu.ShowPage(fmc);
		}
    }
}