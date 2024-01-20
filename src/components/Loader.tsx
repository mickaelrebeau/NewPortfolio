import { Html, useProgress } from "@react-three/drei"

export const Loader = () => {
  const { progress } = useProgress();

  return (
		<Html className="w-full flex items-center justify-center">
			<div className="pb-4 border-b-2 border-fuchsia-400 flex flex-col items-center justify-center">
				<span className="canvas-load"></span>
				<p className="text-center text-[#f1f1f1] text-xl mt-8 font-extrabold transition-all duration-150">
					{progress.toFixed(2)}%
				</p>
			</div>
		</Html>
	);
}