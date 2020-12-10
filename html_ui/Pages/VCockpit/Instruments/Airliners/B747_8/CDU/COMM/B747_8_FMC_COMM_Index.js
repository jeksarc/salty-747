class FMC_COMM_Index {
    static ShowPage(fmc) {
		fmc.activeSystem = "FMC";
		fmc.clearDisplay();
		
		const updateView = () => {
			fmc.setTemplate([
				["ATC INDEX"],
				["\xa0UPLINK", ""],
				["<RTE 1", "POS REPORT>"],
				["\xa0UPLINK (2)", ""],
				["<ALTN", "REQUESTS>"],
				["", ""],
				["<PERF", ""],
				["", ""],
				["<TAKEOFF", ""],
				["", ""],
				["<WIND", ""],
				["", "DATA LINK", "__FMCSEPARATOR"],
				["<DES FORECAST", "READY"]
			]);
		}
		updateView();
		
		fmc.onLeftInput[5] = () => {
			FMC_Menu.ShowPage(fmc);
		}
    }
}