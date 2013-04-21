private class InnerTest {
	class Inner {
		String s;
		public Inner(s) {
			this.s = s;
		}
		
		public void write() {
			System.out.println(s);
		}
	}
	
	public Inner getInner(String s) {
		return new Inner(s);
	}

}

public class Closure {
	public static void main(String args[]) {
		InnerTest it = new InnerTest();
		Inner i = it.getInner("Hello");
		i.write();
	}
}