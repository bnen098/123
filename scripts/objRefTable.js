const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar
	];
};
self.C3_JsPropNameTable = [
	{one: 0},
	{two: 0},
	{three: 0},
	{four: 0},
	{five: 0},
	{v1: 0},
	{v2: 0},
	{v3: 0},
	{v4: 0}
];

self.InstanceType = {
	one: class extends self.ITextInstance {},
	two: class extends self.ITextInstance {},
	three: class extends self.ITextInstance {},
	four: class extends self.ITextInstance {},
	five: class extends self.ITextInstance {}
}